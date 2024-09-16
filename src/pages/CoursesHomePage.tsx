/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/Store'
import { Box } from '@chakra-ui/react'
import { getAllCoursesService } from '../redux/services/CoursesServices'

const CoursesHomePage = () => {

  const dispatch = useDispatch<AppDispatch>()
  const { data } = useSelector((state: RootState) => state.CoursesSlice)

  console.log('data', data)

  React.useEffect(() => {
    dispatch(getAllCoursesService())
  }, [])

  return (
    <Box>
      {
        data.map((item) => {
          return (

            <div key={item.id}>{item.title}</div>
          )
        })
      }
    </Box>
  )
}

export default CoursesHomePage