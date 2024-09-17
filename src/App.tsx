import * as React from 'react'
import type { Router } from '@toolpad/core'
import { AppProvider } from '@toolpad/core/AppProvider'
import { NAVIGATION, Navigator } from './routes/root'

// Components 
import Box from '@mui/material/Box'

// Assets
import Logo from './assets/logos/course-logo.png'

// Style
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { Theme } from './utils/StyleConstants'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function LayoutBasic() {

  const [pathname, setPathname] = React.useState('/dashboard')
  console.log('pathname', pathname)
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
        title: 'Stremio Courses',
      }}
      navigation={NAVIGATION}
      router={router}
      theme={Theme}
    >
      <DashboardLayout>
        <Box sx={{
          padding: '24px',
          background: '#1565c024',
          minHeight: 'calc(100vh - 64px)'
        }}>
          <Navigator pathname={pathname} />
        </Box>
        <ToastContainer />
      </DashboardLayout>
    </AppProvider>
  )
}
