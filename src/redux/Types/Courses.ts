


export interface FormState {
  status: 'idle' |
  'SUBMIT_COURSE_REQUEST' |
  'SUBMIT_COURSE_SUCCESS' |
  'SUBMIT_COURSE_FAILURE' |
  'GET_ALL_COURSES_SUCCESS' |
  'GET_ALL_COURSES_REQUEST' |
  'GET_ALL_COURSES_FAILURE' |
  'DELETE_COURSE_REQUEST' |
  'DELETE_COURSE_SUCCESS' |
  'DELETE_COURSE_FAILURE' |
  'GET_SINGLE_COURSE_REQUEST' |
  'GET_SINGLE_COURSE_SUCCESS' |
  'GET_SINGLE_COURSE_FAILURE' |
  'SUBMIT_COURSE_EDIT_REQUEST' |
  'SUBMIT_COURSE_EDIT_SUCCESS' |
  'SUBMIT_COURSE_EDIT_FAILURE'
  error: string | null
  data: Course[]
  item: SingleCourse
  isLoading: boolean
  isSaving: boolean
  isLoadingSingleCourse: boolean
}

export interface Course {
  id: number
  title: string
  start_date: string
  end_date: string
  knowledge_area: string
  attachment_url: string
  description: string
}

export interface SingleCourse {
  id: number | null
  title: string
  start_date: string | null
  end_date: string | null
  knowledge_area: string
  attachment_url: string
  description: string
}
