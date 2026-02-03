import { Button, Form } from "antd"

interface Values {}

export const EntertainmentForm = () => {
  const handleSubmit = (values: Values): void => {
    console.log({ values })
  }

  return (
    <Form onFinish={handleSubmit}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  )
}
