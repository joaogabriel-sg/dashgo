import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Diego Fernandes</Text>
          <Text color="gray.300" fontSize="small">
            main.joaogabriel@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="João Gabriel"
        src="https://github.com/joaogabriel-sg.png"
      />
    </Flex>
  );
}
