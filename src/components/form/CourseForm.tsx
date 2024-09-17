import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/Store'
import { submitFormService } from '../../redux/services/CoursesServices'
import { Box, Button, styled } from '@mui/material'

// Função para validação dos campos
const validate = (values: any, file: File | null) => {
  const errors: any = {}
  if (!values.title) {
    errors.title = '*O título é obrigatório'
  }
  if (!values.start_date) {
    errors.start_date = '*A data de início é obrigatória'
  }
  if (!values.end_date) {
    errors.end_date = '*A data de término é obrigatória'
  }
  if (!values.knowledge_area) {
    errors.knowledge_area = '*A área de conhecimento é obrigatória'
  }
  if (!file) { // Verifica o arquivo diretamente do estado
    errors.attachment = '*O upload do arquivo é obrigatório'
  }
  if (!values.description) {
    errors.description = '*A descrição é obrigatória'
  }
  return errors
}

const FormLabel = styled('label')({
  color: '#434343',
  fontWeight: 500,
  fontSize: '18px',
  marginRight: '8px'
})
const FormInput = styled('input')({

})
const MetaErrorSpan = styled('span')({
  color: '#ff6767',
  fontSize: '11px',
  marginLeft: '8px',
})
const FieldContainer = styled(Box)({
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column'
})
const AuxContainer = styled(Box)({
  alignItems: 'center',
  display: 'flex',
})

const CourseForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const onSubmit = (values: any) => {
    const formData = { ...values, attachment: file }
    dispatch(submitFormService(formData))
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => validate(values, file)}
      render={({ handleSubmit, form, submitting, pristine }) => (
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
              <Field name="title" subscription={{ error: true, touched: true }}>
                {({ meta }) => meta.touched && meta.error ? <MetaErrorSpan>{meta.error}</MetaErrorSpan> : null}
              </Field>
            </FieldContainer>

            <FieldContainer>
              <AuxContainer>
                <FormLabel>Data de Início:</FormLabel>
                <Field name="start_date" component="input" type="date" />
              </AuxContainer>
              <Field name="start_date" subscription={{ error: true, touched: true }}>
                {({ meta }) => meta.touched && meta.error ? <MetaErrorSpan>{meta.error}</MetaErrorSpan> : null}
              </Field>
            </FieldContainer>

            <FieldContainer>
              <AuxContainer>

                <FormLabel>Data de Término:</FormLabel>
                <Field name="end_date" component="input" type="date" />
              </AuxContainer>
              <Field name="end_date" subscription={{ error: true, touched: true }}>
                {({ meta }) => meta.touched && meta.error ? <MetaErrorSpan>{meta.error}</MetaErrorSpan> : null}
              </Field>
            </FieldContainer>

            <FieldContainer>
              <AuxContainer>
                <FormLabel>Área de Conhecimento:</FormLabel>
                <Field name="knowledge_area" component="input" type="text" placeholder="Área de Conhecimento" />

              </AuxContainer>
              <Field name="knowledge_area" subscription={{ error: true, touched: true }}>
                {({ meta }) => meta.touched && meta.error ? <MetaErrorSpan>{meta.error}</MetaErrorSpan> : null}
              </Field>
            </FieldContainer>

            <FieldContainer>
              <AuxContainer>
                <FormLabel>Upload de Arquivo:</FormLabel>
                <FormInput name="attachment" type="file" onChange={handleFileChange} />
              </AuxContainer>
              <Field name="attachment" subscription={{ error: true, touched: true }}>
                {({ meta }) => meta.touched && meta.error ? <MetaErrorSpan>{meta.error}</MetaErrorSpan> : null}
              </Field>
            </FieldContainer>

            <FieldContainer>
              <AuxContainer>
                <FormLabel>Descrição:</FormLabel>
                <Field name="description" component="textarea" placeholder="Descrição" />
              </AuxContainer>
              <Field name="description" subscription={{ error: true, touched: true }}>
                {({ meta }) => meta.touched && meta.error ? <MetaErrorSpan>{meta.error}</MetaErrorSpan> : null}
              </Field>
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
              <Button
                sx={{

                  fontWeight: 600,

                }}
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}>
                Resetar
              </Button>
            </Box>
          </Box>

        </form>
      )}
    />
  )
}

export default CourseForm
