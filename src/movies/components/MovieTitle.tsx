import { Typography } from 'antd'

const { Title, Text } = Typography;

export const MovieTitle = () => {
  return (
    <>
      <Title level={2}>Register Movie 🎬</Title>
      <Text type="secondary">Lights off, popcorn ready — it's time to pick the next story</Text>
    </>
  );
}
