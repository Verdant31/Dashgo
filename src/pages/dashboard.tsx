import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import { Charts } from '../components/Chart';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      {/* Flex que fica em volta da Sidebar e dos graficos (Abaixo do header)  */}
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

        {/* Sidebar */}
        <Sidebar />

        {/* Grid para mostrar os dois graficos*/}
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">

          <Charts title={"Inscritos da semana"} />
          <Charts title={"Taxa de abertura"} />

        </SimpleGrid>

      </Flex>

    </Flex>
  )
}