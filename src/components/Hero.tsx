import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title, description }: { title: string, description: string }) => (
  <>
  <Flex
    justifyContent="center"
    alignItems="center"
    // height="100vh"
    mt={10}
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Heading fontSize="4vw">{title}</Heading>
   
  </Flex>
  <Flex
    justifyContent="start"
    alignItems="start"
    mt={5}
    color="gray.200"
  >
 <Heading  fontSize="2vw">{description}</Heading>
 </Flex>

  </>
)

Hero.defaultProps = {
  title: 'ZAMENHOF TRANSLATION SERVICE',
  description:"High quality professional translations"
}
