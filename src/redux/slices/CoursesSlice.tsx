import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Course, FormState } from '../Types/Courses'


const initialState: FormState = {
  status: 'idle',
  error: null,
  data: [],
  isLoading: false
}

// eslint-disable-next-line react-refresh/only-export-components
const CoursesSlice = createSlice({
  name: 'form_course',
  initialState,
  reducers: {
    submitCourseSuccess(state) {
      state.status = 'SUBMIT_COURSE_SUCCESS'
    },
    submitCourseFailure(state, action: PayloadAction<string>) {
      state.status = 'SUBMIT_COURSE_FAILURE'
      state.error = action.payload
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
    }
  }
})

export const {
  submitCourseSuccess,
  submitCourseFailure,
  getAllCoursesRequest,
  getAllCoursesSuccess,
  getAllCoursesFailure
} = CoursesSlice.actions

export default CoursesSlice.reducer
