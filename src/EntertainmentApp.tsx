import {Card, Space, Typography } from 'antd'
import { EntertainmentForm } from './components/EntertainmentForm'
const { Title, Text } = Typography

export const EntertainmentApp = () => {
  return (
    <div className='p-4 border bg-gray-200 min-h-screen'>
      <Card>
        <Space direction="vertical" size={16} style={{ width: "100%" }}>
          <div style={{ textAlign: "center", paddingTop: 8 }}>
            <Title level={2} style={{ marginBottom: 0 }}>
              Registro de Usuario
            </Title>
            <Text type="secondary">Completa tus datos para crear una cuenta</Text>
          </div>

          <EntertainmentForm />
          </Space>
      </Card>
    </div>
  )
}
