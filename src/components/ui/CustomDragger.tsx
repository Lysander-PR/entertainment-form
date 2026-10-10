import { Image, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import { useFilePreview } from '@/hooks/useFilePreview';
import type { CustomDraggerProps } from '@/types/interfaces/custom-dragger.interface';

const { Dragger } = Upload;

export const CustomDragger = ({
    title,
    description,
    fileList,
    listType = 'picture',
    maxCount = 1,
    onPreview,
    ...draggerProps
}: CustomDraggerProps) => {
  const { previewUrl, isPreviewOpen, openPreview, setIsPreviewOpen } = useFilePreview();

  return (
    <>
      <Dragger
        fileList={fileList}
        listType={listType}
        maxCount={maxCount}
        beforeUpload={() => false}
        onPreview={onPreview ?? openPreview}
        {...draggerProps}
      >
          <p className="ant-upload-drag-icon">
              <InboxOutlined />
          </p>
          <p className="ant-upload-text">{title}</p>
          <p className="ant-upload-hint">{description}</p>
      </Dragger>

      {previewUrl && (
        <Image
          src={previewUrl}
          alt={title}
          styles={{ root: { display: 'none' } }}
          preview={{
            open: isPreviewOpen,
            onOpenChange: setIsPreviewOpen
          }}
        />
      )}
    </>
  )
}
