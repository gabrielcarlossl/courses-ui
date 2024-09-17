import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/Store'
import { submitFormService } from '../../redux/services/CoursesServices'
import { Box, Button } from '@mui/material'

// Função para validação dos campos
const validate = (values: any, file: File | null) => {
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
  if (!file) { // Verifica o arquivo diretamente do estado
    errors.attachment = 'O upload do arquivo é obrigatório'
  }
  if (!values.description) {
    errors.description = 'A descrição é obrigatória'
  }
  return errors
}

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
            gap: '16px'
          }}
          >
            <div>
              <label>Título</label>
              <Field name="title" component="input" type="text" placeholder="Título" />
              <Field name="title" subscription={{ error: true, touched: true }}>
                {({ meta }) => meta.touched && meta.error ? <span>{meta.error}</span> : null}
              </Field>
            </div>

            <div>
              <label>Data de Início</label>
              <Field name="start_date" component="input" type="date" />
              <Field name="start_date" subscription={{ error: true, touched: true }}>
                {({ meta }) => meta.touched && meta.error ? <span>{meta.error}</span> : null}
              </Field>
            </div>

            <div>
              <label>Data de Término</label>
              <Field name="end_date" component="input" type="date" />
              <Field name="end_date" subscription={{ error: true, touched: true }}>
                {({ meta }) => meta.touched && meta.error ? <span>{meta.error}</span> : null}
              </Field>
            </div>

            <div>
              <label>Área de Conhecimento</label>
              <Field name="knowledge_area" component="input" type="text" placeholder="Área de Conhecimento" />
              <Field name="knowledge_area" subscription={{ error: true, touched: true }}>
                {({ meta }) => meta.touched && meta.error ? <span>{meta.error}</span> : null}
              </Field>
            </div>

            <div>
              <label>Upload de Arquivo</label>
              <input name="attachment" type="file" onChange={handleFileChange} />
              <Field name="attachment" subscription={{ error: true, touched: true }}>
                {({ meta }) => meta.touched && meta.error ? <span>{meta.error}</span> : null}
              </Field>
            </div>

            <div>
              <label>Descrição</label>
              <Field name="description" component="textarea" placeholder="Descrição" />
              <Field name="description" subscription={{ error: true, touched: true }}>
                {({ meta }) => meta.touched && meta.error ? <span>{meta.error}</span> : null}
              </Field>
            </div>

            <div>
              <Button type="submit" disabled={submitting || pristine}>
                Enviar
              </Button>
              <Button type="button" onClick={form.reset} disabled={submitting || pristine}>
                Resetar
              </Button>
            </div>
          </Box>

        </form>
      )}
    />
  )
}

export default CourseForm
