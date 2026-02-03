import { useState } from "react"
import { Button, Col, Form, Radio, Row, type RadioChangeEvent } from "antd"

import { CustomRenderer } from "@/share/components/CustomRenderer"

import { createYupSync } from "@/utils/createYupSync"
import { schemaRegistry } from "@/constants/schema-registry"
import { validationRegistry } from "@/constants/validation-registry"
import { entityOptions } from "@/constants/entity-optionts"
import type { EntityType, EntertainmentField } from "@/types/entertainment.type" 

export const EntertainmentForm = () => {
  const [form] = Form.useForm();
  const [entity, setEntity] = useState<EntityType>("song");

  const currentSchema = schemaRegistry[entity];
  const currentValidation = validationRegistry[entity];

  const handleSubmit = (values: EntertainmentField): void => {
    console.log({ entity, values })
  }

  const handleChangeEntity = (e: RadioChangeEvent) => {
    setEntity(e.target.value);
    form.resetFields();
  }

  return (
    <Form
      key={entity}
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Row gutter={16} justify="center">
        <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
          <Radio.Group
            buttonStyle="solid"
            value={entity}
            onChange={handleChangeEntity}
            >
            {entityOptions.map(option => (
              <Radio.Button key={option.value} value={option.value}>
                {option.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Col>
      </Row>

      <Row gutter={16}>
      {currentSchema.map((item) => (
        <Col key={item.field} {...item.colProps}>
          <Form.Item 
            name={item.field}
            label={item.label}
            rules={[createYupSync(currentValidation, item.field)]}
          >
            <CustomRenderer
              type={item.type}
              inputProps={item.inputProps}
              inputNumberProps={item.inputNumberProps}
              datePickerProps={item.datePickerProps}
              selectProps={item.selectProps}
              draggerProps={item.draggerProps}
            />
          </Form.Item>
        </Col>
      ))}
      </Row>

      <div className="flex justify-end">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  )
}
