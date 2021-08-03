import { Box, Flex, Heading, Button, Icon } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import { UsersTable } from '../../components/UsersTable/UsersTable';

export default function UserList() {
  return (
    //Essa box tá sendo utilizada com a mesma finalidade de um fragment ( <> </>)
    <Box>
      <Header />

      {/* Div que vai cobrir a SideBar e o conteudo da pagina */}
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

        {/* Sidebar */}
        <Sidebar />

        {/* Conteudo da pagina*/}
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">

          {/* Cadastro de usuários */}
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} />}>
              Criar novo
            </Button>
          </Flex>

          {/* Listagem de usuários */}
          <UsersTable />
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}