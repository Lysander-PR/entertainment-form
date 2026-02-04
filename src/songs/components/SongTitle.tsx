import { Typography } from 'antd'

const { Title, Text } = Typography;

export const SongTitle = () => {
  return (
    <>
      <Title level={2}>Register Song 🎵</Title>
      <Text type="secondary">Press play on the mood — every song is a memory in stereo</Text>
    </>
  )
}
