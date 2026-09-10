import { buildFileUrl } from "@/api/build-file-url";
import type { Cover } from "@/types/interfaces/cover.interface";
import type { CoverPayload } from "@/types/interfaces/cover-payload.interface";
import type { CoverResponse } from "@/types/interfaces/cover-response.interface";

export const toCover = (cover?: CoverResponse): Cover | undefined => {
    if (!cover) {
        return undefined;
    }

    return {
        id: cover.id,
        name: cover.file,
        url: buildFileUrl(cover.id)
    };
}

export const appendCover = (formData: FormData, cover?: CoverPayload): void => {
    if (!cover) {
        return;
    }

    formData.append('cover', cover.file);

    if (cover.id) {
        formData.append('coverId', cover.id);
    }
}
