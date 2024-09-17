import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import BarChartIcon from '@mui/icons-material/BarChart'
import { Navigation } from '@toolpad/core'
import VideoSettingsIcon from '@mui/icons-material/VideoSettings'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'

export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Home',
  },
  {
    segment: 'dashboard',
    title: 'Assistir Cursos',
    icon: <OndemandVideoIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Gerencimaneto',
  },
  {
    segment: 'management',
    title: 'Gerenciar Cursos',
    icon: <VideoSettingsIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Monitoramento',
  },
  {
    segment: 'analytics',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'analytics',
        title: 'Uso de Memória',
        icon: <DonutLargeIcon />,
      },

    ],
  },
]