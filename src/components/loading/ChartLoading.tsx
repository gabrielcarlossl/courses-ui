import { Text } from '@chakra-ui/react'
import { Box, Skeleton, Typography } from '@mui/material'


const ChartLoading = () => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '24px'
        }} variant="h6" gutterBottom>
        Uso de memória na AWS S3:
      </Typography>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"

        p={4}
        borderRadius={2}
      >
        <Box>
          <Skeleton
            variant="circular"
            width={250}
            height={250}
            animation="wave"
            sx={{ mb: 2 }}
          />
          <Text fontWeight={500} textAlign='center'>Uso em Gigabyte(Gb)</Text>
        </Box>
        <Box display="flex" flexDirection='column' gap='32px' ml='24px' >
          <Box display="flex" alignItems="center" mr={2}>
            <Skeleton variant="rectangular" width={20} height={20} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              Livre
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Skeleton variant="rectangular" width={20} height={20} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              Utilizado
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ChartLoading