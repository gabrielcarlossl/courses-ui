


export interface FormState {
  status: 'idle' | 'SUBMIT_COURSE_REQUEST' |'SUBMIT_COURSE_SUCCESS' | 'SUBMIT_COURSE_FAILURE' | 'GET_ALL_COURSES_SUCCESS' | 'GET_ALL_COURSES_REQUEST' | 'GET_ALL_COURSES_FAILURE' | 'DELETE_COURSE_REQUEST' | 'DELETE_COURSE_SUCCESS' | 'DELETE_COURSE_FAILURE'
  error: string | null
  data: Course[]
  isLoading: boolean
  isSaving: boolean
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
