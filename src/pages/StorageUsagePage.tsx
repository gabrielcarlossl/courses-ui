/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import StorageUsageChart from '../components/chart/StorageUsageChart'
import { Box, Typography } from '@mui/material'
import { Text } from '@chakra-ui/react'
import { COURSES_ENDPOINT } from '../utils/Constants'
import ChartLoading from '../components/loading/ChartLoading'

const StorageUsagePage = () => {
  const [usage, setUsage] = useState({ storage_used: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>('')

  React.useEffect(() => {
    document.title = "Stremio Courses | Monitoramento"
    const fetchStorageUsage = async () => {
      try {
        const response = await fetch(`${COURSES_ENDPOINT}/storage_usage`)
        if (!response.ok) {
          throw new Error('Erro ao buscar dados de armazenamento')
        }
        const data = await response.json()
        setUsage(data)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchStorageUsage()
  }, [])

  console.log('usage', usage)

  if (loading) {
    return <ChartLoading />
  }

  if (error) {
    return <div>Erro: {error}</div>
  }

  return (
    <Box width='fit-content'>
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 600,
          fontSize: '28px'
        }}
      >
        Uso do AWS S3:
      </Typography>
      <StorageUsageChart usage={usage.storage_used} />
      <Text fontWeight={500} textAlign='center'>Uso em Gigabyte(Gb)</Text>
    </Box>
  )
}

export default StorageUsagePage