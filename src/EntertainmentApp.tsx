import {Card, Space } from 'antd'
import { EntertainmentForm } from './components/EntertainmentForm'
import { TitleRenderer } from './components/TitleRenderer'

export const EntertainmentApp = () => {
  return (
    <div className='p-4 border bg-gray-200 min-h-screen'>
      <Card>
        <Space orientation="vertical" size={16} style={{ width: "100%" }}>
          <div style={{ textAlign: "center", paddingTop: 8 }}>
            <TitleRenderer />
          </div>

          <EntertainmentForm />
          </Space>
      </Card>
    </div>
  )
}
