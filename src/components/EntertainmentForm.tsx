import { useEffect } from "react"
import { Button, Col, Form, Radio, Row, Spin } from "antd"

import { EntertainmentFormField } from "@/components/EntertainmentFormField"

import { entertainmentOptions } from "@/constants/entertainment-optionts"

import { useEntertainmentForm } from "@/hooks/useEntertainmentForm"

export const EntertainmentForm = () => {
  const [form] = Form.useForm();

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
  } = useEntertainmentForm();

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
          <EntertainmentFormField
            key={item.field}
            item={item}
            validations={validations}
            onDraggerChange={handleDraggerChange}
          />
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
