import type { PropsWithChildren } from "react";
import { useTokenRefresh } from "@/auth/hooks/useTokenRefresh";

export const TokenRefreshProvider = ({ children }: PropsWithChildren) => {
    useTokenRefresh();

    return <>{children}</>;
}
