import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Course, FormState, SingleCourse } from '../Types/Courses'


const initialState: FormState = {
  status: 'idle',
  error: null,
  data: [],
  item: {
    id: null,
    title: '',
    start_date: null,
    end_date: null,
    knowledge_area: '',
    attachment_url: '',
    description: ''
  },
  isLoadingSingleCourse: false,
  isLoading: false,
  isSaving: false
}

// eslint-disable-next-line react-refresh/only-export-components
const CoursesSlice = createSlice({
  name: 'form_course',
  initialState,
  reducers: {
    getSingleCourseRequest(state) {
      state.status = 'GET_SINGLE_COURSE_REQUEST'
      state.isLoadingSingleCourse = true
    },
    getSingleCourseSuccess(state,  action: PayloadAction<SingleCourse>) {
      state.status = 'GET_SINGLE_COURSE_SUCCESS'
      state.isLoadingSingleCourse = false
      state.item = action.payload
    },
    getSingleCourseFailure(state, action: PayloadAction<string>) {
      state.status = 'GET_SINGLE_COURSE_FAILURE'
      state.isLoadingSingleCourse = false
      state.error = action.payload
    },
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
    },
    submitCourseEditRequest(state) {
      state.status = 'SUBMIT_COURSE_EDIT_REQUEST'
      state.isSaving = true
    },
    submitCourseEditSuccess(state) {
      state.status = 'SUBMIT_COURSE_EDIT_SUCCESS'
      state.isSaving = false
    },
    submitCourseEditFailure(state, action: PayloadAction<string>) {
      state.status = 'SUBMIT_COURSE_EDIT_FAILURE'
      state.error = action.payload
      state.isSaving = false
    },

  }
})

export const {
  submitCourseEditRequest,
  submitCourseEditSuccess,
  submitCourseEditFailure,
  getSingleCourseRequest,
  getSingleCourseSuccess,
  getSingleCourseFailure,
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
