import { clearAccessToken } from "@/api/auth-token";

const REDIRECT_PARAM = 'redirect';

let isRedirecting = false;

/**
 * Sends the user to the login app, asking it to hand the session back to the
 * current URL once the credentials are accepted.
 */
export const redirectToLogin = (): void => {
    const loginUrl = import.meta.env.VITE_LOGIN_URL;

    if (!loginUrl) {
        console.error('VITE_LOGIN_URL is not configured: cannot reach the login app.');
        return;
    }

    if (isRedirecting) return;
    isRedirecting = true;

    const target = new URL(loginUrl);
    target.searchParams.set(REDIRECT_PARAM, window.location.href);

    window.location.replace(target.toString());
}

export const endSession = (): void => {
    clearAccessToken();
    redirectToLogin();
}
