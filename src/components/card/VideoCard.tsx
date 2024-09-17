import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import { FormatDate } from '../../utils/functions'


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
        background: '#153f753d',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '320px',
        position: 'relative',
        width: '100%',
        '> video': {
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px'
        }
      }}
    >
      <video width="" height="240" controls controlsList='nodownload'>
        <source src={`https://d33f29pllgc9t7.cloudfront.net/${url}`} type="video/mp4" />
      </video>
      <Text
        as='span'
        sx={{
          position: 'absolute',
          top: '7px',
          right: '7px',
          background: '#434343c5',
          borderRadius: '8px',
          color: '#e7e7e7',
          margin: 0,
          padding: '2px 6px',
          lineHeight: '100%',
          fontSize: '0.95rem',
          textTransform: 'capitalize'
        }}
      >
        {knowledge_area}
      </Text>
      <Box
        padding='12px'>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: 500,
              fontSize: '0.8rem'
            }}
          >
            <Text>
              Título
            </Text>
            <Box display='flex' gap='8px'>
              <Box display='flex'>
                <Text>
                  {FormatDate(start_date)}
                </Text>
              </Box> -
              <Box display='flex'>
                <Text>
                  {FormatDate(end_date)}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              fontWeight: 600,
              fontSize: '1.2rem'
            }}
          >
            {course_title}
          </Box>
        </Box>
        <Divider sx={{ borderBottom: '1px solid #434343', marginBlock: '0.5rem' }} />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            fontWeight: 500,
            fontSize: '0.8rem',
            justifyContent: 'space-between',
            mt: '0.5rem'
          }}
        >
          <Text>
            Descrição
          </Text>
        </Box>
        <Text
          sx={{
            fontWeight: 400,
            fontSize: '0.8rem',

          }}
        >
          {description}
        </Text>

      </Box>
    </Box>
  )
}

export default VideoCard