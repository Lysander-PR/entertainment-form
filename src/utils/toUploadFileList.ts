import type { UploadFile } from "antd/es/upload/interface";
import type { Cover } from "@/types/interfaces/cover.interface";

export const toUploadFileList = (cover?: Cover): UploadFile[] => {
    if (!cover) {
        return [];
    }

    return [{
        uid: cover.id,
        name: cover.name,
        status: 'done',
        url: cover.url
    }];
}
