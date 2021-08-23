import { Flex, Heading, useColorMode } from '@chakra-ui/react'

export const Hero = ({ title, description }: { title: string, description: string }) => {
  const { colorMode } = useColorMode()

  const color = { light: 'gray.600', dark: 'gray.200' }
  
  
  return (
  <>
  <Flex
    justifyContent="center"
    alignItems="center"
    // height="100vh"
    mt={10}
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Heading fontSize={["xl", "6vw", "5vw", "4vw"]}>{title}</Heading>
   
  </Flex>
  <Flex
    justifyContent="start"
    alignItems="start"
    mt={5}
    color={color[colorMode]}
    mb={10}
  >
 <Heading  fontSize={["lg", "4vw", "3vw", "2vw"]}>{description}</Heading>
 </Flex>

  </>
)}

Hero.defaultProps = {
  title: 'ZAMENHOF TRANSLATION SERVICE',
  description:"High quality professional translations"
}
