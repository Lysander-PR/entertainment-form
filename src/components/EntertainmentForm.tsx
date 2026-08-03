import { useEffect } from "react"
import { Button, Col, Form, Radio, Row, Spin } from "antd"

import { CustomRenderer } from "@/components/CustomRenderer"

import { createYupSync } from "@/utils/createYupSync"

import { entertainmentOptions } from "@/constants/entertainment-optionts"

import { useEntertainmentForm } from "@/hooks/useEntertainmentForm"

export const EntertainmentForm = () => {
  const [form] = Form.useForm();

  const artist = Form.useWatch('artist', form)

  const {
    entertainmentSelected,
    isEditing,
    initialValues,
    isLoadingRecord,
    schema,
    validations,
    handleSubmit,
    handleDraggerChange,
    handleChangeEntity
  } = useEntertainmentForm({ artist });

  useEffect(() => {
    if (!initialValues) {
      form.resetFields();
      return;
    }

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

      <Spin spinning={isLoadingRecord}>
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
      </Spin>

      <div className="flex justify-end">
        <Button type="primary" htmlType="submit" disabled={isLoadingRecord}>
          {isEditing ? 'Update' : 'Submit'}
        </Button>
      </div>
    </Form>
  )
}
