'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/lexend/700.css'
import '@fontsource/lexend/400.css'
import '@fontsource/lexend/300.css'
import '@fontsource/lexend/200.css'
import '@fontsource/lexend/100.css'

const theme = extendTheme({
  fonts: {
    heading: `'Lexend', sans-serif`,
    body: `'Lexend', sans-serif`,
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}