import axios from 'axios';

interface ApiErrorResponse {
    message?: string | string[];
}

export const handleApiError = (error: unknown, fallbackMessage: string): never => {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
        const { message } = error.response?.data ?? {};

        throw new Error(Array.isArray(message) ? message.join(', ') : message ?? error.message);
    }

    throw error instanceof Error ? error : new Error(fallbackMessage);
}
