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
            <TableCellStyled align="center">URL do arquivo</TableCellStyled>
            <TableCellStyled align="center">Ações</TableCellStyled>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            console.log('row', row)
            return (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="center">{row.description ?? 'Não possui descrição'}</TableCell>
                <TableCell align="center">{row.knowledge_area}</TableCell>
                <TableCell align="right">{row.start_date}</TableCell>
                <TableCell align="right">{row.end_date}</TableCell>
                <TableCell align="right">{row.attachment_url}</TableCell>
                <TableCell align="right">
                  <Box>
                    <Tooltip title='Editar'>
                      <Button>
                        <EditIcon />
                      </Button>
                    </Tooltip>
                    <Tooltip title='Excluir'>
                      <Button onClick={()=> dispatch(DeleteCoursesService(row.id))}>
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
    </TableContainer>
  )
}

export default ManagementCoursesVideosTable