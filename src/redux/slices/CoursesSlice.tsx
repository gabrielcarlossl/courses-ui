import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Course {
  id: number
  name: string
  description: string
}

interface FormState {
  status: 'idle' | 'SUBMIT_COURSE_SUCCESS' | 'SUBMIT_COURSE_FAILURE' | 'GET_ALL_COURSES_SUCCESS' | 'GET_ALL_COURSES_FAILURE'
  error: string | null
  data: Course[]
}

const initialState: FormState = {
  status: 'idle',
  error: null,
  data: []
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
    getAllCoursesSuccess(state, action: PayloadAction<Course[]>) {
      state.status = 'GET_ALL_COURSES_SUCCESS'
      state.data = action.payload
    },
    getAllCoursesFailure(state, action: PayloadAction<string>) {
      state.status = 'GET_ALL_COURSES_FAILURE'
      state.error = action.payload
    }
  }
})

export const {
  submitCourseSuccess,
  submitCourseFailure,
  getAllCoursesSuccess,
  getAllCoursesFailure } = CoursesSlice.actions

export default CoursesSlice.reducer
