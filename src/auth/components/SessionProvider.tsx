import { useEffect, type PropsWithChildren } from "react";
import { getAccessToken } from "@/api/auth-token";
import { useTokenRefresh } from "@/auth/hooks/useTokenRefresh";
import { redirectToLogin } from "@/auth/utils/login-redirect";

/**
 * Guards the app: this project has no login screen, the session is issued by
 * the login app and handed off through the URL fragment. Without a token there
 * is nothing to render, so the user is sent to the login app instead.
 */
export const SessionProvider = ({ children }: PropsWithChildren) => {
    const hasSession = !!getAccessToken();

    useTokenRefresh();

    useEffect(() => {
        if (!hasSession) redirectToLogin();
    }, [hasSession]);

    if (!hasSession) return null;

    return <>{children}</>;
}
