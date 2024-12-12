import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MuiApp from './MuiApp.jsx'
import { ThemeProvider } from '@emotion/react'

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#f57e42",
//     },
//     secondary: {
//       main: "#27278c",
//     },
//   },
//     typography: {
//       h1: {
//         fontSize: "3rem",
//         fontWeight: 600,
//       },
//       h2: {
//         fontSize: "1.5rem",
//         fontWeight: 600,
//       },
//       p: {
//         fontSize: "1rem",
//         fontWeight: 300,
//       },
//     },
// });

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MuiApp />
  </StrictMode>,
)
