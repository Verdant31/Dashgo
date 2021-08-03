import { Box, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

export function UsersTable() {
  return (
    <Table colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th px="6" color="gray.300" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          <Th>Data de cadastro</Th>
          <Th width="8"></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td px="6">
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="bold">João Piovesan</Text>
              <Text fontSize="sm" color="gray.300">verdantxd@gmail.com</Text>
            </Box>
          </Td>
          <Td>04 de Abril, 2021</Td>
          <Td>
            <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>
              Editar
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td px="6">
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="bold">João Piovesan</Text>
              <Text fontSize="sm" color="gray.300">verdantxd@gmail.com</Text>
            </Box>
          </Td>
          <Td>04 de Abril, 2021</Td>
          <Td>
            <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>
              Editar
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td px="6">
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="bold">João Piovesan</Text>
              <Text fontSize="sm" color="gray.300">verdantxd@gmail.com</Text>
            </Box>
          </Td>
          <Td>04 de Abril, 2021</Td>
          <Td>
            <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>
              Editar
            </Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}