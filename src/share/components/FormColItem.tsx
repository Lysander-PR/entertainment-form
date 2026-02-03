import { Col, Form } from "antd"
import type { ColProps, FormItemProps } from "antd"
import type { ReactNode } from "react"

interface Props {
  colProps?: ColProps
  formProps?: FormItemProps
  children: ReactNode
}

export const FormColItem = ({ colProps, formProps, children }: Props) => {
  return (
    <Col {...colProps}>
      <Form.Item {...formProps}>
        {children}
      </Form.Item>
    </Col>
  )
}
