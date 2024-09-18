/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CourseEditForm from '../form/EditCourseForm'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

type IEditCourseModalProps = {
  open: boolean
  handleClose: () => void
  courseData: any
}
const EditCourseModal: React.FC<IEditCourseModalProps> = ({
  open,
  handleClose,
  courseData
}) => {
  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
         <CourseEditForm  courseData={courseData} />
        </Box>
      </Modal>
    </div>
  )
}

export default EditCourseModal