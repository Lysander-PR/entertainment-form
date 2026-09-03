import type { UploadFile } from "antd/es/upload/interface";

const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });

export const toPreviewUrl = async (file: UploadFile): Promise<string> => {
    if (file.url) {
        return file.url;
    }

    if (!file.originFileObj) {
        return '';
    }

    return toBase64(file.originFileObj);
}
