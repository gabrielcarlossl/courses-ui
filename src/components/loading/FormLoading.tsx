import { Box, Skeleton, Stack } from '@mui/material'

const FormLoading = () => {
  return (
    <Stack mt='24px' spacing={2}>
          <Box display='flex' gap='8px' alignItems='center'>
            <Skeleton variant="rounded" width={80} height={20} />
            <Skeleton variant="rounded" width={280} height={40} />
          </Box>
          <Box display='flex' gap='8px' alignItems='center'>
            <Skeleton variant="rounded" width={160} height={20} />
            <Skeleton variant="rounded" width={200} height={40} />
          </Box>
          <Box display='flex' gap='8px' alignItems='center'>
            <Skeleton variant="rounded" width={160} height={20} />
            <Skeleton variant="rounded" width={200} height={40} />
          </Box>
          <Box display='flex' gap='8px' alignItems='center'>
            <Skeleton variant="rounded" width={190} height={20} />
            <Skeleton variant="rounded" width={170} height={40} />
          </Box>
          <Box display='flex' gap='8px' alignItems='center'>
            <Skeleton variant="rounded" width={190} height={20} />
            <Skeleton variant="rounded" width={170} height={40} />
          </Box>
          <Box display='flex' gap='8px' alignItems='center'>
            <Skeleton variant="rounded" width={90} height={20} />
            <Skeleton variant="rounded" width={170} height={80} />
          </Box>
         
          <Box width={360} display='flex' justifyContent='space-between'>
            <Skeleton variant="rounded" width={100} height={40} />
            <Skeleton variant="rounded" width={100} height={40} />
          </Box>
        </Stack>
  )
}

export default FormLoading