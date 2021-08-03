import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Piovesan</Text>
          <Text color="gray.300" fontSize="small">verdantxd@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="João Piovesan" src="https://github.com/Verdant31.png" />

    </Flex>
  );
}