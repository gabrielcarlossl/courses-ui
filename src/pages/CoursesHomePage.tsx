/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

// Components
import { Box } from '@chakra-ui/react'

// Redux
import { getAllCoursesService } from '../redux/services/CoursesServices'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/Store'

// Styles
import styles from './styles/home.module.scss'
import VideoCard from '../components/card/VideoCard'

const CoursesHomePage = () => {

  const dispatch = useDispatch<AppDispatch>()
  const { data } = useSelector((state: RootState) => state.CoursesSlice)

  console.log('data', data)

  React.useEffect(() => {
    dispatch(getAllCoursesService())
  }, [])

  return (
    <Box>

      <h1 className={styles.title}>Recentes</h1>

      {
        data.map((item) => {
          return (

            <VideoCard
              key={item.id}
              course_title={item.title}
              description={item.description}
              knowledge_area={item.knowledge_area}
              url={item.attachment_url}
              start_date={item.start_date}
              end_date={item.end_date}
            />
          )
        })
      }
    </Box>
  )
}

export default CoursesHomePage