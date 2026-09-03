const FILES_ENDPOINT = '/files';

export const buildFileUrl = (id: string): string =>
    `${import.meta.env.VITE_API_URL}${FILES_ENDPOINT}/${id}`;
