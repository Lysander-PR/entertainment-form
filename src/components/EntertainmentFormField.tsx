import { Col, Form } from "antd"
import type { UploadFile } from "antd/es/upload/interface"
import type { UploadChangeParam } from "antd/lib/upload"
import type * as Yup from "yup"

import { CustomRenderer } from "@/components/CustomRenderer"
import { CustomFormList } from "@/components/ui/CustomFormList"

import { createYupSync } from "@/utils/createYupSync"

import { TypeRenderer } from "@/types/enums/type-renderer.enum"
import type { EntertainmentField } from "@/types/entertainment.type"
import type { SchemaEntertainment } from "@/types/interfaces/schemas.interface"

interface Props {
    item: SchemaEntertainment<EntertainmentField>;
    validations: Yup.ObjectSchema<Yup.AnyObject>;
    onDraggerChange: (info: UploadChangeParam<UploadFile<unknown>>) => void;
}

export const EntertainmentFormField = ({ item, validations, onDraggerChange }: Props) => {
  const rules = [createYupSync(validations, item.field)];

  if (item.type === TypeRenderer.LIST && item.listProps) {
    return (
      <Col {...item.colProps}>
        <Form.Item label={item.label}>
          <CustomFormList name={item.field} rules={rules} {...item.listProps} />
        </Form.Item>
      </Col>
    )
  }

  return (
    <Col {...item.colProps}>
      <Form.Item
        name={item.field}
        label={item.label}
        rules={rules}
      >
        <CustomRenderer
          type={item.type}
          inputProps={item.inputProps}
          inputNumberProps={item.inputNumberProps}
          datePickerProps={item.datePickerProps}
          selectProps={item.selectProps}
          draggerProps={item.draggerProps ? { ...item.draggerProps, onChange: onDraggerChange } : undefined}
        />
      </Form.Item>
    </Col>
  )
}
