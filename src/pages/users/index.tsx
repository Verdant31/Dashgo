import { Box, Flex, Heading, Button, Icon, Spinner, Text, Table, Thead, Tr, Th, Checkbox, Tbody, Td, useBreakpointValue } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link';
import { RiPencilLine } from 'react-icons/ri';
import { useUsers } from '../../services/hooks/useUsers';
import { Pagination } from '../../components/Pagination';
import { useState } from 'react';

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error, isFetching } = useUsers(currentPage);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="3">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="6">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>

            <Link href="/users/create" passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} />}>
                Criar novo
              </Button>
            </Link>
          </Flex>

          {/*Se está carregando, mostra o spinner, se não esta carregando porem deu erro, mostra o erro, se não está carregando e não deu erro, mostra os usuarios.*/}
          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.users.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td>
                          {isWideVersion &&
                            <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>
                              Editar
                            </Button>
                          }
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box >
  );
}