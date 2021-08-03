import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';

interface NavSectionProps {
  children: ReactNode;
  title: string;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}