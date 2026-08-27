import { refreshAccessToken } from "@/auth/actions/auth.action";

let pendingRefresh: Promise<string> | null = null;

const forgetPendingRefresh = () => {
    pendingRefresh = null;
}

export const refreshSession = (): Promise<string> => {
    if (pendingRefresh) {
        return pendingRefresh;
    }

    // Nobody is refreshing yet: start the request and keep it
    pendingRefresh = refreshAccessToken();
    pendingRefresh.then(forgetPendingRefresh, forgetPendingRefresh);

    return pendingRefresh;
}
