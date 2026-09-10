import type { UploadFile } from "antd/es/upload/interface";
import type { Cover } from "@/types/interfaces/cover.interface";
import type { CoverPayload } from "@/types/interfaces/cover-payload.interface";

export const toCoverPayload = (fileList: UploadFile[], cover?: Cover): CoverPayload | undefined => {
    const file = fileList[0]?.originFileObj;

    if (!file) {
        return undefined;
    }

    return {
        id: cover?.id,
        file
    };
}
