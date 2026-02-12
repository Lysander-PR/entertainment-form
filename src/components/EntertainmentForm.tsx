import { useEffect } from "react"
import { Button, Col, Form, Radio, Row } from "antd"
import { useSearchParams } from "react-router-dom"

import { CustomRenderer } from "@/share/components/CustomRenderer"

import { createYupSync } from "@/utils/createYupSync"

import { entertainmentOptions } from "@/constants/entertainment-optionts"
import { TypeEntertainment } from "@/types/enums/type-entertainment.enum"

import { useInitialValues } from "@/hooks/useInitialValues"
import { useEntertainmentForm } from "@/hooks/useEntertainmentForm"

export const EntertainmentForm = () => {
  const [form] = Form.useForm();
  const [searchParams] = useSearchParams({ entertainment: TypeEntertainment.SONG });

  const entertainmentSelected: TypeEntertainment = searchParams.get("entertainment") as TypeEntertainment || TypeEntertainment.SONG;
  const id = searchParams.get("id") || 'value-id-123-example-if-needed';

  const artist = Form.useWatch('artist', form)

  const {
    schema,
    validations,
    handleSubmit,
    handleDraggerChange,
    handleChangeEntity
  } = useEntertainmentForm({ entertainmentSelected, artist, id });

  const { data: initialValues } = useInitialValues(entertainmentSelected, id);
  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues, form]);

  return (
    <Form
      key={entertainmentSelected}
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Row gutter={16} justify="center">
        <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
          <Radio.Group
            buttonStyle="solid"
            value={entertainmentSelected}
            onChange={handleChangeEntity}
            >
            {entertainmentOptions.map(option => (
              <Radio.Button key={option.value} value={option.value}>
                {option.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Col>
      </Row>

      <Row gutter={16}>
      {schema.map((item) => (
        <Col key={item.field} {...item.colProps}>
          <Form.Item 
            name={item.field}
            label={item.label}
            rules={[createYupSync(validations, item.field)]}
          >
            <CustomRenderer
              type={item.type}
              inputProps={item.inputProps}
              inputNumberProps={item.inputNumberProps}
              datePickerProps={item.datePickerProps}
              selectProps={item.selectProps}
              draggerProps={item.draggerProps ? {...item.draggerProps, onChange: handleDraggerChange} : undefined}
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
