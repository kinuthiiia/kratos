import { Button, Card, Text } from "@mantine/core";
import { IconEditCircle, IconX } from "@tabler/icons";

export default function Set() {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <h2>Set Name</h2>
      {/* Set description */}
      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>
      {/* Set params */}
      <div></div>

      {/* Set resource */}
      <div>
        <img src={null} alt="Computer man"></img>
      </div>

      {/* Set action buttons */}
      <div>
        <Button>
          <IconX />
        </Button>
        <Button>
          <IconEditCircle />
        </Button>
      </div>
    </Card>
  );
}
