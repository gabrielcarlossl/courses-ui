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

// Redux
import { getAllCoursesService } from '../redux/services/CoursesServices'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/Store'

// Styles
import styles from './styles/management.module.scss'

const TableCellStyled = styled(TableCell)({
color: '#434343',
fontWeight: 600,
})

const CoursesManagement = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data } = useSelector((state: RootState) => state.CoursesSlice)

  console.log('data', data)

  React.useEffect(() => {
    dispatch(getAllCoursesService())
  }, [])

  return (
    <div className={styles.container}>
      <h1>Gerencimaneto de cursos</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                      <Button>
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
    </div>
  )
}

export default CoursesManagement