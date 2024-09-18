import { PieChart } from '@mui/x-charts/PieChart'

type IStorageUsageChartProps = {
  usage: number
}
 const StorageUsageChart: React.FC<IStorageUsageChartProps> = ({
  usage
 }) =>  {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Livre' },
            { id: 1, value: usage, label: 'Uso' },
          ],
        },
      ]}
      width={340}
      height={200}
    />
  )
}

export default StorageUsageChart