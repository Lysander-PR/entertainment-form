import { useState } from 'react'
import type { UploadFile } from 'antd/es/upload/interface'

import { toPreviewUrl } from '@/utils/toPreviewUrl'

export const useFilePreview = () => {
    const [previewUrl, setPreviewUrl] = useState('');
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const openPreview = async (file: UploadFile): Promise<void> => {
        const url = await toPreviewUrl(file);

        if (!url) {
            return;
        }

        setPreviewUrl(url);
        setIsPreviewOpen(true);
    }

    return {
        previewUrl,
        isPreviewOpen,
        openPreview,
        setIsPreviewOpen
    }
}
