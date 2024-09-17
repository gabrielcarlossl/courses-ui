// Assets
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import BarChartIcon from '@mui/icons-material/BarChart'
import VideoSettingsIcon from '@mui/icons-material/VideoSettings'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import MovieCreationIcon from '@mui/icons-material/MovieCreation'

// Components
import { Navigation } from '@toolpad/core'
import CoursesHomePage from '../pages/CoursesHomePage'
import StorageUsagePage from '../pages/StorageUsagePage'
import CoursesManagement from '../pages/CoursesManagement'
import CreateCoursePage from '../pages/CreateCoursePage'

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
    case '/create':
      return <CreateCoursePage />
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
    segment: 'create',
    title: 'Adicionar Cursos',
    icon: <MovieCreationIcon />,
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