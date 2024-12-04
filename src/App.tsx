import { IconJarLogoIcon } from "@radix-ui/react-icons";
import { Button, Box, Text } from "../src";

function App() {
  return (
    <Box>
      <Text>Hello from Gaz Themes :)</Text>
      <br />
      <Button
        leftIcon={<IconJarLogoIcon width={20} height={20} />}
        colorScheme="teal"
        size="md"
        rightIcon={<IconJarLogoIcon width={20} height={20} />}
      >
        Let's go
      </Button>
    </Box>
  );
}

export default App;
