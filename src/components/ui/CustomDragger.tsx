import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { CustomDraggerProps } from '@/types/interfaces/custom-dragger.interface';

const { Dragger } = Upload;

export const CustomDragger = ({
    title,
    description,
    fileList,
    ...draggerProps
}: CustomDraggerProps) => {
  return (
    <Dragger
      fileList={fileList}
      {...draggerProps}
    >
        <p className="ant-upload-drag-icon">
            <InboxOutlined />
        </p>
        <p className="ant-upload-text">{title}</p>
        <p className="ant-upload-hint">{description}</p>
    </Dragger>
  )
}
