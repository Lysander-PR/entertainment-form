import { useEffect } from "react";
import { clearAccessToken, getAccessToken } from "@/api/auth-token";
import { refreshAccessToken } from "@/auth/actions/auth.action";

export const useTokenRefresh = () => {
    useEffect(() => {
        if (!getAccessToken()) return;

        const intervalId = setInterval(async () => {
            try {
                await refreshAccessToken();
            } catch {
                clearAccessToken();
                clearInterval(intervalId);
            }
        }, 1000 * 50); // * 50 seconds

        return () => clearInterval(intervalId);
    }, []);
}
