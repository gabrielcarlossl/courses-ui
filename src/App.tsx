import * as React from 'react'
import type { Router, Navigation } from '@toolpad/core'

// Components 
import Box from '@mui/material/Box'

// Assets
import DashboardIcon from '@mui/icons-material/Dashboard'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import BarChartIcon from '@mui/icons-material/BarChart'
import Logo from './assets/logos/course-logo.png'

// Style
import { createTheme } from '@mui/material/styles'
import { AppProvider } from '@toolpad/core/AppProvider'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import CoursesHomePage from './pages/CoursesHomePage'

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Principal',
  },
  {
    segment: 'dashboard',
    title: 'Cursos',
    icon: <DashboardIcon />,
  },

  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Monitoramento',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Uso de Memória',
        icon: <DonutLargeIcon />,
      },

    ],
  },
]

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
})

function Layout({ pathname }: { pathname: string }) {
  switch (pathname) {
    case '/dashboard':
      return <CoursesHomePage />
    case '/reports':
      return (
        <Box>
          reports
        </Box>
      )
    default:
      return (
        <Box
          sx={{
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          Default
        </Box>
      )
  }
}


export default function DashboardLayoutBasic() {


  const [pathname, setPathname] = React.useState('/dashboard')

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    }
  }, [pathname])


  return (

    <AppProvider
      branding={{
        logo: <img src={Logo} />,
        title: 'Watch Courses',
      }}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <Box sx={{
          padding: '24px'
        }}>
          <Layout pathname={pathname} />
        </Box>
      </DashboardLayout>
    </AppProvider>

  )
}
