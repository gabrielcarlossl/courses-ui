import { Box } from '@chakra-ui/react'
import React from 'react'

type IVideoCardProps = {
  course_title: string
  knowledge_area: string
  url: string
  start_date: string
  end_date: string
  description: string
}

const VideoCard: React.FC<IVideoCardProps> = ({
  course_title,
  knowledge_area,
  url,
  start_date,
  end_date,
  description
}) => {
  return (
    <Box
    sx={{
      width: 'fit-content'
    }}
    >
      <video width="320" height="240" controls controlsList='nodownload'>
        <source src={`https://d33f29pllgc9t7.cloudfront.net/${url}`} type="video/mp4" />

      </video>
    </Box>
  )
}

export default VideoCard