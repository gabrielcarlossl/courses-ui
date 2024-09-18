import React, { useEffect, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/Store'
import { editSingleCourseService } from '../../redux/services/CoursesServices'
import { Box, styled, Tooltip, Typography } from '@mui/material'
import { SingleCourse } from '../../redux/Types/Courses'

const FormLabel = styled('label')({
  color: '#434343',
  fontWeight: 500,
  fontSize: '14px',
  marginRight: '8px'
})

const FormInput = styled('input')({
  display: 'none'
})

const Button = styled('button')({
  fontSize: '14px',
  background: '#1565c0',
  padding: '8px 15px',
  borderRadius: '32px',
  color: '#fff',
  '&:hover': {
    opacity: 0.7
  },
  '&:active': {
    background: '#073364'
  },
  '&:disabled': {
    background: '#bebebe',
    cursor: 'not-allowed',
    opacity: 1
  }
})
const FieldContainer = styled(Box)({
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column'
})
const AuxContainer = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  'input, textarea': {
    background: '#1565c047'
  }
})

type ICourseEditFormProp = {
  courseData: {
    attachment_url: string
    description: string
    end_date: string
    id: number | null
    knowledge_area: string
    start_date: string
    title: string
  }
}

const CourseEditForm: React.FC<ICourseEditFormProp> = ({ courseData }) => {
  const dispatch = useDispatch<AppDispatch>()
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState<string>('Nenhum arquivo selecionado')
  const [initialValues, setInitialValues] = useState({
    title: '',
    start_date: '',
    end_date: '',
    knowledge_area: '',
    description: '',
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
      setFileName(e.target.files[0].name)
    }
  }

  const onSubmit = (values: SingleCourse) => {
    const formData = { ...values, id: courseData.id, attachment: file }
    dispatch(editSingleCourseService(formData))
  }

  useEffect(() => {
    document.title = "Stremio Courses | Editar"
    setInitialValues(courseData)
  }, [])

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, submitting, pristine }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                'input, textarea': {
                  padding: '8px',
                  borderRadius: '16px'
                }
              }}
            >
              <FieldContainer>
                <AuxContainer>
                  <FormLabel>Título:</FormLabel>
                  <Field name="title" component="input" type="text" placeholder="Título" />
                </AuxContainer>
              </FieldContainer>

              <FieldContainer>
                <AuxContainer>
                  <FormLabel>Data de Início:</FormLabel>
                  <Field name="start_date" component="input" type="date" />
                </AuxContainer>
              </FieldContainer>

              <FieldContainer>
                <AuxContainer>

                  <FormLabel>Data de Término:</FormLabel>
                  <Field name="end_date" component="input" type="date" />
                </AuxContainer>
              </FieldContainer>

              <FieldContainer>
                <AuxContainer>
                  <FormLabel>Área de Conhecimento:</FormLabel>
                  <Field name="knowledge_area" component="input" type="text" placeholder="Área de Conhecimento" />
                </AuxContainer>
              </FieldContainer>

              <FieldContainer>
                <AuxContainer>
                  <FormLabel>Escolha o novo arquivo:</FormLabel>
                  <FormInput
                    name="attachment"
                    type="file"
                    onChange={handleFileChange}
                    id="file-upload"
                  />
                  <Tooltip title='Selecione apenas se for editar o arquivo do vídeo.'>
                    <Button onClick={() => document.getElementById('file-upload')?.click()} type="button">
                      Selecionar Arquivo
                    </Button>
                  </Tooltip>
                  <Typography component='span' ml='8px'>{fileName}</Typography>
                </AuxContainer>
              </FieldContainer>

              <FieldContainer>
                <AuxContainer>
                  <FormLabel>Descrição:</FormLabel>
                  <Field name="description" component="textarea" placeholder="Descrição" />
                </AuxContainer>
              </FieldContainer>
              <Box
                sx={{
                  display: 'flex',
                  gap: '16px',
                }}
              >
                <Button
                  sx={{
                    fontWeight: 600,
                  }}
                  type="submit"
                  disabled={submitting || pristine}
                >
                  Enviar
                </Button>
              </Box>
            </Box>
          </form>
        )
      }}
    />
  )
}

export default CourseEditForm
