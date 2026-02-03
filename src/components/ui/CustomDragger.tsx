import { Upload } from 'antd';
import type { UploadProps } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

interface Props extends UploadProps {
    title: string;
    description: string;
}

export const CustomDragger = ({
    title,
    description,
    ...draggerProps
}: Props) => {
  return (
    <Dragger {...draggerProps}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined />
        </p>
        <p className="ant-upload-text">{title}</p>
        <p className="ant-upload-hint">{description}</p>
    </Dragger>
  )
}
