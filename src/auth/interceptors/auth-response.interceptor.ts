import { isAxiosError, type InternalAxiosRequestConfig } from "axios";
import { entertainmentApi } from "@/api/entertainment.api";
import { endSession } from "@/auth/utils/login-redirect";
import { refreshSession } from "@/auth/utils/refresh-session";

const REFRESH_ENDPOINT = '/auth/refresh';
const UNAUTHORIZED = 401;

type RetriableConfig = InternalAxiosRequestConfig & { retried?: boolean };

/**
 * Matters for the create/update actions: they send `FormData`
 * built from the form, so replaying the original request saves the submission
 * instead of losing what the user typed.
 *
 * Attached from `main.tsx` rather than from `entertainment.api.ts` to keep the
 * api module free of any dependency on the auth domain.
 */
export const setupAuthInterceptor = (): void => {
    entertainmentApi.interceptors.response.use(
        (response) => response,
        async (error: unknown) => {
            if (!isAxiosError(error)) throw error;

            const config: RetriableConfig | undefined = error.config;
            const isUnauthorized = error.response?.status === UNAUTHORIZED;
            const isRefreshRequest = !!config?.url?.endsWith(REFRESH_ENDPOINT);
            const wasAlreadyRetried = !!config?.retried;

            const canRecoverSession =
                !!config && isUnauthorized && !isRefreshRequest && !wasAlreadyRetried;

            if (!canRecoverSession) throw error;

            config.retried = true;

            try {
                await refreshSession();
            } catch {
                endSession();
                throw error;
            }

            return entertainmentApi(config);
        }
    );
}
