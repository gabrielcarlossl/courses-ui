


export interface FormState {
  status: 'idle' | 'SUBMIT_COURSE_SUCCESS' | 'SUBMIT_COURSE_FAILURE' | 'GET_ALL_COURSES_SUCCESS' | 'GET_ALL_COURSES_FAILURE'
  error: string | null
  data: Course[]
}



export interface Course {
  id: number
  title: string
  start_date: string
  end_date: string
  knowledge_area: string
  attachment_url: string
}
