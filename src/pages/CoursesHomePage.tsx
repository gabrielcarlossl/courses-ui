import React from 'react'

// Components
import { Box, Divider, Text } from '@chakra-ui/react'

// Redux
import { getAllCoursesService } from '../redux/services/CoursesServices'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/Store'

// Styles
import styles from './styles/home.module.scss'
import VideoCard from '../components/card/VideoCard'

// Utils
import { isAfter, parseISO } from 'date-fns'

const CoursesHomePage = () => {

  const dispatch = useDispatch<AppDispatch>()
  const { data } = useSelector((state: RootState) => state.CoursesSlice)

  React.useEffect(() => {
    dispatch(getAllCoursesService())
    document.title = "Stremio Courses | Assistir"
  }, [])

  return (
    <Box>
      <Text as='h1' color='#434343' className={styles.title}>Recentes</Text>
      <Divider sx={{ borderBottom: '1px solid #434343', marginBottom: '2rem' }}  />

      {
        data.length === 0 ? <h1>Não há cursos cadastrados!</h1> :
          <Box className={styles.cards_container}>
            {
              data
                .filter(item => isAfter(parseISO(item.end_date), new Date()))
                .map((item) => {
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
      }
    </Box>
  )
}

export default CoursesHomePage