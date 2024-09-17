import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import BarChartIcon from '@mui/icons-material/BarChart'
import { Navigation } from '@toolpad/core'
import VideoSettingsIcon from '@mui/icons-material/VideoSettings'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import CoursesHomePage from '../pages/CoursesHomePage'
import StorageUsagePage from '../pages/StorageUsagePage'
import CoursesManagement from '../pages/CoursesManagement'

export function Navigator({ pathname }: { pathname: string }) {
  switch (pathname) {
    case '/dashboard':
      return <CoursesHomePage />
    case '/storage/storage' :
      return <StorageUsagePage />
    case '/storage' :
      return <StorageUsagePage />
    case '/management':
      return <CoursesManagement />
    default:
      return <CoursesHomePage />
  }
}

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
    segment: 'storage',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'storage',
        title: 'Uso de Memória',
        icon: <DonutLargeIcon />,
      },

    ],
  },
]