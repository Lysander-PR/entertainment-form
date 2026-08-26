import { setAccessToken } from "@/api/auth-token";

const TOKEN_PARAM = 'token';

/**
 * Reads the access token handed off by the login app through the URL fragment
 * (`#token=<jwt>`) and stores it. The fragment is stripped afterwards so the
 * token is not left in the address bar or in the browsing history.
 */
export const consumeTokenFromUrl = (): boolean => {
    const fragment = window.location.hash.slice(1);

    if (!fragment) return false;

    const params = new URLSearchParams(fragment);
    const token = params.get(TOKEN_PARAM);

    if (!token) return false;

    setAccessToken(token);
    params.delete(TOKEN_PARAM);

    const remaining = params.toString();
    const { pathname, search } = window.location;

    window.history.replaceState(null, '', `${pathname}${search}${remaining ? `#${remaining}` : ''}`);

    return true;
}
