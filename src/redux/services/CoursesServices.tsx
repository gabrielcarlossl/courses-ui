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
  submitCourseFailure,
  submitCourseSuccess
} from '../slices/CoursesSlice'

// Utils
import { COURSES_ENDPOINT } from '../../utils/Constants'
import { toast } from 'react-toastify'

export const submitFormService = (values: any) => async (dispatch: AppDispatch): Promise<void> => {
  try {
    await axios.post(COURSES_ENDPOINT, values)
    dispatch(submitCourseSuccess())
  } catch (error: any) {
    console.error('Error creating course:', error)
    dispatch(submitCourseFailure(error.message))
  }
}

export const getAllCoursesService = () => async (dispatch: AppDispatch): Promise<void> => {
  dispatch(getAllCoursesRequest())
  try {
    const response = await axios.get(COURSES_ENDPOINT)
    dispatch(getAllCoursesSuccess(response.data))
  } catch (error: any) {
    dispatch(getAllCoursesFailure(error.message))
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
