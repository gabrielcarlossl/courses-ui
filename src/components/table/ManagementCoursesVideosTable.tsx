import React from 'react'

// Assets
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

// Components
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Button, styled, Tooltip, useMediaQuery, useTheme } from '@mui/material'
import { Course } from '../../redux/Types/Courses'
import { AppDispatch } from '../../redux/Store'
import { useDispatch } from 'react-redux'
import { DeleteCoursesService } from '../../redux/services/CoursesServices'
import EditCourseModal from '../modal/EditCourseModal'
import { FormatDatePtBr } from '../../utils/functions'

const TableCellStyled = styled(TableCell)({
  color: '#434343',
  fontWeight: 600,
})

type IManagementCoursesVideosTableProps = {
  data: Course[]
}
type CourseData = {
  attachment_url: string
  description: string
  end_date: string
  id: number | null
  knowledge_area: string
  start_date: string
  title: string
}

const ManagementCoursesVideosTable: React.FC<IManagementCoursesVideosTableProps> = ({
  data
}) => {
  const theme = useTheme()
  const dispatch = useDispatch<AppDispatch>()
  const [open, setOpen] = React.useState(false)
  const [courseData, setCourseData] = React.useState<CourseData>({
    attachment_url: '',
    description: '',
    end_date: '',
    id: null,
    knowledge_area: '',
    start_date: '',
    title: ''
  })

  const isXsOrSm = useMediaQuery(theme.breakpoints.down('sm'))
  const handleOpen = (singleCourse: CourseData) => {
    setOpen(true)
    setCourseData(singleCourse)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCellStyled align="left">Título</TableCellStyled>
            {!isXsOrSm && (
              <>
                <TableCellStyled align="center">Descrição</TableCellStyled>
                <TableCellStyled align="right">Área de conhecimento</TableCellStyled>
              </>
            )}
            <TableCellStyled align="right">
              {isXsOrSm ? 'Período' : 'Data de Início'}
            </TableCellStyled>
            {!isXsOrSm && <TableCellStyled align="right">Data de Término</TableCellStyled>}
            {!isXsOrSm && <TableCellStyled align="center">Nome Objeto AWS S3</TableCellStyled>}
            <TableCellStyled align="center">Ações</TableCellStyled>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            return (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.title}</TableCell>
                {!isXsOrSm && (
                  <>
                    <TableCell align="center">{row.description ?? 'Não possui descrição'}</TableCell>
                    <TableCell align="center">{row.knowledge_area}</TableCell>
                  </>
                )}
                <TableCell align="right">
                  {isXsOrSm
                    ? `${FormatDatePtBr(row.start_date)} - ${FormatDatePtBr(row.end_date)}`
                    : FormatDatePtBr(row.start_date)
                  }
                </TableCell>
                {!isXsOrSm && <TableCell align="right">{FormatDatePtBr(row.end_date)}</TableCell>}
                {!isXsOrSm && <TableCell align="right">{row.attachment_url}</TableCell>}
                <TableCell align="right">
                  <Box>
                    <Tooltip title="Editar">
                      <Button onClick={() => handleOpen(row)}>
                        <EditIcon />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Excluir">
                      <Button onClick={() => dispatch(DeleteCoursesService(row.id))}>
                        <DeleteIcon />
                      </Button>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <EditCourseModal open={open} handleClose={handleClose} courseData={courseData} />
    </TableContainer>
  )
}

export default ManagementCoursesVideosTable
