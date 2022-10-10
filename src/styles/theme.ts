import { extendTheme } from "@chakra-ui/react"
import { colors, fonts, textStyles } from '@styles/theme/foundations';
import { Button } from '@styles/theme/components/Button';

export const theme = extendTheme({
  colors,
  fonts,
  textStyles,
  components: {
    Button,
  },
})