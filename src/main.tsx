import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Component 
import App from './App.tsx'
import './index.css'

// Redux
import { Provider } from 'react-redux'
import { store } from './redux/Store.tsx'

// Styles
import { StyledEngineProvider } from '@mui/material'
import { ChakraTheme } from './utils/StyleConstants.tsx'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={ChakraTheme}>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </Provider>
    </ChakraProvider>
  </StrictMode>,
)
