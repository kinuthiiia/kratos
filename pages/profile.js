import { Button, TextInput } from "@mantine/core";
import { IconEdit, IconX } from "@tabler/icons";

export default function Profile() {
  return (
    <div>
      {/* Header */}
      <div>
        <h1>Profile</h1>
      </div>

      {/* Profile photo */}
      <div>
        <img src="/favicon.ico" alt="my_logo" />
        <Button>
          <IconEdit />
        </Button>
      </div>

      {/* User details */}
      <div>
        <TextInput placeholder="NAME" label="Full name" disabled />
      </div>

      {/* Save Info */}
      <div>
        <Button>
          <IconX />
        </Button>
        <Button>Save</Button>
      </div>
    </div>
  );
}
