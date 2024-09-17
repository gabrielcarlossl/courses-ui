/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Box, Button, FormLabel } from '@mui/material'
import { Form, Field } from 'react-final-form'
import { AppDispatch } from '../../redux/Store'
import { useDispatch } from 'react-redux'
import { submitFormService } from '../../redux/services/CoursesServices'

// Função para validação dos campos
const validate = (values: any) => {
  const errors: any = {}
  if (!values.title) {
    errors.title = 'O título é obrigatório'
  }
  if (!values.start_date) {
    errors.start_date = 'A data de início é obrigatória'
  }
  if (!values.end_date) {
    errors.end_date = 'A data de término é obrigatória'
  }
  if (!values.knowledge_area) {
    errors.knowledge_area = 'A área de conhecimento é obrigatória'
  }
  if (!values.attachment_url) {
    errors.attachment_url = 'O upload do arquivo é obrigatório'
  }
  if (!values.description) {
    errors.description = 'A descrição é obrigatória'
  }
  return errors
}


const CourseForm = () => {

  const dispatch = useDispatch<AppDispatch>()

  const onSubmit = (values: any) => {
    dispatch(submitFormService(values))
    console.log('onsubmit values', values)
  }
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, form }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div>
                <FormLabel>Título</FormLabel>
                <Field name="title" component="input" type="text" placeholder="Título" />
                <Field name="title" subscription={{ error: true, touched: true }}>
                  {({ meta }) => meta.touched && meta.error ? <span>{meta.error}</span> : null}
                </Field>
              </div>

              <div>
                <FormLabel>Data de Início</FormLabel>
                <Field name="start_date" component="input" type="date" />
                <Field name="start_date" subscription={{ error: true, touched: true }}>
                  {({ meta }) => meta.touched && meta.error ? <span>{meta.error}</span> : null}
                </Field>
              </div>

              <div>
                <FormLabel>Data de Término</FormLabel>
                <Field name="end_date" component="input" type="date" />
                <Field name="end_date" subscription={{ error: true, touched: true }}>
                  {({ meta }) => meta.touched && meta.error ? <span>{meta.error}</span> : null}
                </Field>
              </div>

              <div>
                <FormLabel>Área de Conhecimento</FormLabel>
                <Field name="knowledge_area" component="input" type="text" placeholder="Área de Conhecimento" />
                <Field name="knowledge_area" subscription={{ error: true, touched: true }}>
                  {({ meta }) => meta.touched && meta.error ? <span>{meta.error}</span> : null}
                </Field>
              </div>

              <div>
                <FormLabel>Upload de Arquivo</FormLabel>
                <Field name="attachment" component="input" type="file" multiple={false} />
                <Field name="attachment" subscription={{ error: true, touched: true }}>
                  {({ meta }) => meta.touched && meta.error ? <span>{meta.error}</span> : null}
                </Field>
              </div>

              <div>
                <FormLabel>Descrição</FormLabel>
                <Field name="description" component="textarea" placeholder="Descrição" />
                <Field name="description" subscription={{ error: true, touched: true }}>
                  {({ meta }) => meta.touched && meta.error ? <span>{meta.error}</span> : null}
                </Field>
              </div>

              <div>
                <Button type="submit">
                  Enviar
                </Button>
                <Button type="button" onClick={form.reset}>
                  Resetar
                </Button>
              </div>
            </Box>
          </form>
        )
      }}
    />
  )
}

export default CourseForm
