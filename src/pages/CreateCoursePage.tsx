import React from 'react'
import CourseForm from '../components/form/CourseForm'
import { Text } from '@chakra-ui/react'



const CreateCoursePage = () => {
  return (
    <div>
      <Text
        sx={{
          color: '#434343',
          fontSize: '24px',
          fontWeight: 600,
          marginBottom: '24px'
        }}
        as='h1'
      >
        Criação de curso
      </Text>

      <CourseForm />
    </div>
  )
}

export default CreateCoursePage