import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Course, FormState } from '../Types/Courses'


const initialState: FormState = {
  status: 'idle',
  error: null,
  data: [],
  isLoading: false,
  isSaving: false
}

// eslint-disable-next-line react-refresh/only-export-components
const CoursesSlice = createSlice({
  name: 'form_course',
  initialState,
  reducers: {
    submitCourseRequest(state) {
      state.status = 'SUBMIT_COURSE_REQUEST'
      state.isSaving = true
    },
    submitCourseSuccess(state) {
      state.status = 'SUBMIT_COURSE_SUCCESS'
      state.isSaving = false
    },
    submitCourseFailure(state, action: PayloadAction<string>) {
      state.status = 'SUBMIT_COURSE_FAILURE'
      state.error = action.payload
      state.isSaving = false
    },
    getAllCoursesRequest(state) {
      state.status = 'GET_ALL_COURSES_REQUEST'
      state.isLoading = true
    },
    getAllCoursesSuccess(state, action: PayloadAction<Course[]>) {
      state.status = 'GET_ALL_COURSES_SUCCESS'
      state.data = action.payload
      state.isLoading = false
    },
    getAllCoursesFailure(state, action: PayloadAction<string>) {
      state.status = 'GET_ALL_COURSES_FAILURE'
      state.error = action.payload
      state.isLoading = false
    },
    deleteCourseRequest(state) {
      state.status = 'DELETE_COURSE_REQUEST'
      state.isLoading = true
    },
    deleteCourseSuccess(state, action: PayloadAction<number>) {
      state.status = 'DELETE_COURSE_SUCCESS'
      state.isLoading = false
      state.data = state.data.filter(course => course.id !== action.payload)
    },
    deleteCourseFailure(state, action: PayloadAction<string>) {
      state.status = 'DELETE_COURSE_FAILURE'
      state.error = action.payload
      state.isLoading = false
    }
  }
})

export const {
  submitCourseRequest,
  submitCourseSuccess,
  submitCourseFailure,
  getAllCoursesRequest,
  getAllCoursesSuccess,
  getAllCoursesFailure,
  deleteCourseRequest,
  deleteCourseSuccess,
  deleteCourseFailure
} = CoursesSlice.actions

export default CoursesSlice.reducer
