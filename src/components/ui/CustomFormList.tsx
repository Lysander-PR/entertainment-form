import { Button, Card, Col, Form, Row, Space } from "antd"
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons"
import type { FormListProps } from "antd/es/form"

import { CustomRenderer } from "@/components/CustomRenderer"

import { createYupSync } from "@/utils/createYupSync"

import type { CustomListProps } from "@/types/interfaces/custom-list.interface"

interface Props extends CustomListProps {
    name: string;
    rules?: FormListProps['rules'];
}

export const CustomFormList = ({
    name,
    rules,
    itemSchema,
    itemValidations,
    itemLabel,
    addLabel
}: Props) => {
  return (
    <Form.List name={name} rules={rules}>
        {(fields, { add, remove }, { errors }) => (
            <Space orientation="vertical" size={16} style={{ width: '100%' }}>
                {fields.map(({ key, name: rowName }, index) => (
                    <Card
                        key={key}
                        size="small"
                        title={`${itemLabel} ${index + 1}`}
                        extra={
                            <Button
                                type="text"
                                danger
                                icon={<DeleteOutlined />}
                                aria-label={`Remove ${itemLabel} ${index + 1}`}
                                onClick={() => remove(rowName)}
                            />
                        }
                    >
                        <Row gutter={16}>
                        {itemSchema.map((item) => (
                            <Col key={item.field} {...item.colProps}>
                                <Form.Item
                                    name={[rowName, item.field]}
                                    label={item.label}
                                    rules={[createYupSync(itemValidations, item.field)]}
                                >
                                    <CustomRenderer
                                        type={item.type}
                                        inputProps={item.inputProps}
                                        inputNumberProps={item.inputNumberProps}
                                        datePickerProps={item.datePickerProps}
                                        selectProps={item.selectProps}
                                    />
                                </Form.Item>
                            </Col>
                        ))}
                        </Row>
                    </Card>
                ))}

                <Button type="dashed" block icon={<PlusOutlined />} onClick={add}>
                    {addLabel}
                </Button>

                <Form.ErrorList errors={errors} />
            </Space>
        )}
    </Form.List>
  )
}
