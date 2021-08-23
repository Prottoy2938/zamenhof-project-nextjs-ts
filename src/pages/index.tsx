import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      {/* <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
        <Code>typescript</Code>.
      </Text> */}

      <List spacing={5} my={0}>
        <ListItem>
          <ListIcon fontSize="1.2rem" as={CheckCircleIcon} color="green.500" />
          <ChakraLink
          fontSize="1.2rem"
            isExternal
            href="https://www.zamenhof.co.il/services/"
            flexGrow={1}
            mr={2}
          >
            Business Translation <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon fontSize="1.2rem" as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal fontSize="1.2rem" href="https://www.zamenhof.co.il/translation-quota/" flexGrow={1} mr={2}>
            How much does a translation cost? <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon fontSize="1.2rem" as={CheckCircleIcon} color="green.500" />
          <ChakraLink fontSize="1.2rem" isExternal href="https://www.zamenhof.co.il/contact-us/" flexGrow={1} mr={2}>
          Are you left with a question? <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    {/* <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer> */}
    <CTA />
  </Container>
)

export default Index
