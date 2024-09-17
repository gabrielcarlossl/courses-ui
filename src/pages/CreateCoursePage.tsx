import CourseForm from '../components/form/CourseForm'
import { Divider, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/Store'
import FormLoading from '../components/loading/FormLoading'

const CreateCoursePage = () => {

  const { isSaving } = useSelector((state: RootState) => state.CoursesSlice)


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
        Cadastro de curso
      </Text>

      <Divider sx={{ borderBottom: '1px solid #434343', marginBlock: '0.5rem' }} />

      {
        isSaving ? <FormLoading /> : <CourseForm />
      }
    </div>
  )
}

export default CreateCoursePage