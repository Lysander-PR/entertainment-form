import type { UploadFile } from "antd/es/upload/interface";
import type { CoverPayload } from "@/types/interfaces/cover-payload.interface";

export const toCoverPayload = (fileList: UploadFile[]): CoverPayload | undefined => {
    const file = fileList[0]?.originFileObj;

    if (!file) {
        return undefined;
    }

    return { file };
}
