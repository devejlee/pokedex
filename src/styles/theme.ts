import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    red: {
      100: "#DD3431",
    },
  },
  fonts: {
    vt323: 'VT323, monospace',
  },
  textStyles: {
    heading2: {
      fontFamily: 'vt323',
      fontSize: '25px',
    },
  }
})