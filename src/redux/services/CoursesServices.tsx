/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

// Redux
import { AppDispatch } from '../Store'
import {
  getAllCoursesFailure,
  getAllCoursesSuccess,
  submitCourseFailure,
  submitCourseSuccess
} from '../slices/CoursesSlice'

// Utils
import { COURSES_ENDPOINT } from '../../utils/Constants'


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
  try {
    const response = await axios.get(COURSES_ENDPOINT)
    dispatch(getAllCoursesSuccess(response.data))
  } catch (error: any) {
    dispatch(getAllCoursesFailure(error.message))
  }
}