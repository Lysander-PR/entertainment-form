import { entertainmentApi } from "@/api/entertainment.api";
import { handleApiError } from "@/api/handle-api-error";
import { setAccessToken } from "@/api/auth-token";
import type { RefreshResponse } from "@/auth/types/interfaces/refresh-response.interface";

const ENDPOINT = '/auth';

export const refreshAccessToken = async (): Promise<string> => {
    try {
        const { data } = await entertainmentApi.post<RefreshResponse>(`${ENDPOINT}/refresh`);

        setAccessToken(data.access_token);

        return data.access_token;
    } catch (error) {
        return handleApiError(error, 'Could not refresh the session token');
    }
}
