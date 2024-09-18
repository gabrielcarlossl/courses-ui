/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Box, Button, styled, Tooltip } from '@mui/material'
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

const ManagementCoursesVideosTable: React.FC<IManagementCoursesVideosTableProps> = ({
  data
}) => {

  const dispatch = useDispatch<AppDispatch>()
  const [open, setOpen] = React.useState(false)
  const [courseData, setCourseData] = React.useState<any>()

  const handleOpen = (singleCourse: any) => {
    setOpen(true)
    setCourseData(singleCourse)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCellStyled align="left">Título</TableCellStyled>
            <TableCellStyled align="center">Descrição</TableCellStyled>
            <TableCellStyled align="right">Área de conhecimento</TableCellStyled>
            <TableCellStyled align="right">Data de Início</TableCellStyled>
            <TableCellStyled align="right">Data de Término</TableCellStyled>
            <TableCellStyled align="center">Nome Objeto AWS S3</TableCellStyled>
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
                <TableCell align="center">{row.description ?? 'Não possui descrição'}</TableCell>
                <TableCell align="center">{row.knowledge_area}</TableCell>
                <TableCell align="right">{FormatDatePtBr(row.start_date)}</TableCell>
                <TableCell align="right">{FormatDatePtBr(row.end_date)}</TableCell>
                <TableCell align="right">{row.attachment_url}</TableCell>
                <TableCell align="right">
                  <Box>
                    <Tooltip title='Editar'>
                      <Button onClick={() => handleOpen(row)}>
                        <EditIcon />
                      </Button>
                    </Tooltip>
                    <Tooltip title='Excluir'>
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