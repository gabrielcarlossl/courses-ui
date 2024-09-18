/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

// Redux
import { AppDispatch } from '../Store'
import {
  deleteCourseFailure,
  deleteCourseRequest,
  deleteCourseSuccess,
  getAllCoursesFailure,
  getAllCoursesRequest,
  getAllCoursesSuccess,
  getSingleCourseRequest,
  submitCourseEditFailure,
  submitCourseEditRequest,
  submitCourseEditSuccess,
  submitCourseFailure,
  submitCourseRequest,
  submitCourseSuccess
} from '../slices/CoursesSlice'

// Utils
import { COURSES_ENDPOINT } from '../../utils/Constants'
import { toast } from 'react-toastify'

export const submitFormService = (values: any) => async (dispatch: AppDispatch): Promise<void> => {

  const notifySuccess = () => toast.success('Curso Criado!')
  const notifyError = () => toast.error('Erro ao criar curso.')

  dispatch(submitCourseRequest())

  const formData = new FormData()
  formData.append('course[title]', values.title)
  formData.append('course[start_date]', values.start_date)
  formData.append('course[end_date]', values.end_date)
  formData.append('course[knowledge_area]', values.knowledge_area)
  formData.append('course[description]', values.description)

  if (values.attachment && values.attachment) {
    formData.append('course[attachment]', values.attachment)
  }
  try {
    const response = await fetch(COURSES_ENDPOINT, {
      method: 'POST',
      body: formData,
    })

    if (response.status === 201) {
      dispatch(submitCourseSuccess())
      notifySuccess()
    }

  } catch (error: any) {
    console.error('Error creating course:', error)
    dispatch(submitCourseFailure(error.message))
    notifyError()
  }
}

export const getAllCoursesService = () => async (dispatch: AppDispatch): Promise<void> => {
  dispatch(getAllCoursesRequest())
  try {
    const response = await axios.get(COURSES_ENDPOINT)
    if (response.status === 200) {
      dispatch(getAllCoursesSuccess(response.data))
    }
  } catch (error: any) {
    dispatch(getAllCoursesFailure(error.message))
  }
}

export const getSingleCoursesService = (id: number) => async (dispatch: AppDispatch): Promise<void> => {
  dispatch(getSingleCourseRequest())
  try {
    const response = await axios.get(`${COURSES_ENDPOINT}/${id}`)
    if (response.status === 200) {
      dispatch(getAllCoursesSuccess(response.data))
    }
  } catch (error: any) {
    dispatch(getAllCoursesFailure(error.message))
  }
}

export const editSingleCourseService = (values: any) => async (dispatch: AppDispatch): Promise<void> => {

  const notifySuccess = () => toast.success('Curso editado!')
  const notifyError = () => toast.error('Erro ao editar curso.')

  dispatch(submitCourseEditRequest())

  const formData = new FormData()
  values.title && formData.append('course[title]', values.title)
  values.start_date && formData.append('course[start_date]', values.start_date)
  values.end_date && formData.append('course[end_date]', values.end_date)
  values.knowledge_area && formData.append('course[knowledge_area]', values.knowledge_area)
  values.description && formData.append('course[description]', values.description)

  if (values.attachment && values.attachment) {
    (values.attachment !== null) && formData.append('course[attachment]', values.attachment)
  }
  try {
    const response = await fetch(`${COURSES_ENDPOINT}/${values?.id}`, {
      method: 'PATCH',
      body: formData,
    })

    if (response.status === 200) {
      dispatch(submitCourseEditSuccess())
      notifySuccess()
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }

  } catch (error: any) {
    console.error('Error editing course:', error)
    dispatch(submitCourseEditFailure(error.message))
    notifyError()
  }
}

export const DeleteCoursesService = (id: number) => async (dispatch: AppDispatch): Promise<void> => {
  const notifySuccess = () => toast.success('Curso deletado!')
  const notifyError = () => toast.error('Erro ao deletar Curso.')
  dispatch(deleteCourseRequest())
  try {
    const response = await axios.delete(`${COURSES_ENDPOINT}/${id}`)
    if (response.status === 204) {
      dispatch(deleteCourseSuccess(id))
      notifySuccess()
    }
  } catch (error: any) {
    dispatch(deleteCourseFailure(error.message))
    notifyError()
  }
}
