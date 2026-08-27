import { useEffect } from "react";
import { getAccessToken } from "@/api/auth-token";
import { endSession } from "@/auth/utils/login-redirect";
import { refreshSession } from "@/auth/utils/refresh-session";

export const useTokenRefresh = () => {
    useEffect(() => {
        if (!getAccessToken()) return;

        const refresh = async () => {
            try {
                await refreshSession();
            } catch {
                clearInterval(intervalId);
                endSession();
            }
        };

        const intervalId = setInterval(refresh, 1000 * 50); // * 50 seconds
        refresh();

        return () => clearInterval(intervalId);
    }, []);
}
