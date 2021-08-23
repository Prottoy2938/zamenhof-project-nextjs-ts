import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    // position="fixed"
    // bottom="0"
    mt="9rem"
    width="100%"
    maxWidth="48rem"
    py={3}
  >
    <ChakraLink isExternal href="https://www.zamenhof.co.il/contact-us/" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" colorScheme="green">
        contact us
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      
      href="https://forms.gle/fdu4uWsY1x3SXwyP9"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" colorScheme="green">
        Get a Quote
      </Button>
    </ChakraLink>
  </Container>
)
