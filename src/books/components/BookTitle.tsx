import { Typography } from 'antd'

const { Title, Text } = Typography;

export const BookTitle = () => {
  return (
    <>
      <Title level={2}>Register Book 📚</Title>
      <Text type="secondary">Turn the page — your next adventure begins with a single line</Text>
    </>
  )
}
