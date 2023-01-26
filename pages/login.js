import { Button } from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons";

export default function Login() {
  return (
    <div>
      <div>
        <img src="/favicon.ico" alt="my_logo" />
      </div>
      <Button>
        <IconBrandGoogle /> Sign In
      </Button>
    </div>
  );
}
