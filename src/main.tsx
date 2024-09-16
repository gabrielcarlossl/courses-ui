import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// ChakraUi
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

// Component 
import App from './App.tsx'
import './index.css'

// Redux
import { Provider } from 'react-redux'
import { store } from './redux/Store.tsx'
import { StyledEngineProvider } from '@mui/material'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </Provider>
    </ChakraProvider>
  </StrictMode>,
)
