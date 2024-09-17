import React from 'react'

// Redux
import { getAllCoursesService } from '../redux/services/CoursesServices'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/Store'

// Styles
import styles from './styles/management.module.scss'
import ManagementCoursesVideosTable from '../components/table/ManagementCoursesVideosTable'

const CoursesManagement = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data } = useSelector((state: RootState) => state.CoursesSlice)

  React.useEffect(() => {
    dispatch(getAllCoursesService())
    document.title = "Stremio Courses | Gerenciar"
  }, [])

  return (
    <div className={styles.container}>
      <h1>Gerencimaneto de cursos</h1>
     { data.length === 0 ? <h1>Não há cursos cadastrados!</h1> : <ManagementCoursesVideosTable data={data} />}
    </div>
  )
}

export default CoursesManagement