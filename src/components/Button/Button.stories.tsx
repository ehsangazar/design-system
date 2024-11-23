import { BookmarkIcon } from "@radix-ui/react-icons";
import Flex from "../Flex/Flex";
import Button from "./Button";
import Spinner from "../Spinner/Spinner";

export default {
  title: "Components/Button",
  component: Button,
};

export const ButtonShowcase = () => (
  <Flex direction="column" gap="6">
    {/* Size variations */}
    <Flex gap="3" align="center">
      <Button size="1" variant="soft">
        Size 1
      </Button>
      <Button size="2" variant="soft">
        Size 2
      </Button>
      <Button size="3" variant="soft">
        Size 3
      </Button>
    </Flex>

    {/* Variant variations */}
    <Flex align="center" gap="3">
      <Button variant="classic">Classic</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="surface">Surface</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </Flex>

    {/* Color variations */}
    <Flex gap="3">
      <Button color="indigo" variant="soft">
        Indigo
      </Button>
      <Button color="cyan" variant="soft">
        Cyan
      </Button>
      <Button color="orange" variant="soft">
        Orange
      </Button>
      <Button color="crimson" variant="soft">
        Crimson
      </Button>
      <Button color="green" variant="soft">
        Green
      </Button>
      <Button color="purple" variant="soft">
        Purple
      </Button>
    </Flex>

    {/* High Contrast variations */}
    <Flex gap="3">
      <Button color="gray" variant="classic" highContrast>
        Classic HC
      </Button>
      <Button color="gray" variant="solid" highContrast>
        Solid HC
      </Button>
      <Button color="gray" variant="soft" highContrast>
        Soft HC
      </Button>
      <Button color="gray" variant="surface" highContrast>
        Surface HC
      </Button>
      <Button color="gray" variant="outline" highContrast>
        Outline HC
      </Button>
    </Flex>

    {/* Radius variations */}
    <Flex gap="3">
      <Button radius="none" variant="soft">
        No Radius
      </Button>
      <Button radius="small" variant="soft">
        Small Radius
      </Button>
      <Button radius="medium" variant="soft">
        Medium Radius
      </Button>
      <Button radius="large" variant="soft">
        Large Radius
      </Button>
      <Button radius="full" variant="soft">
        Full Radius
      </Button>
    </Flex>

    {/* Icons variations */}
    <Flex gap="3">
      <Button variant="soft">
        <BookmarkIcon /> With Icon
      </Button>
      <Button variant="soft">
        With Icon <BookmarkIcon />
      </Button>
      <Button variant="soft">
        <BookmarkIcon />
      </Button>
    </Flex>

    {/* Loading variations */}
    <Flex gap="3">
      <Button loading variant="solid">
        Loading
      </Button>
      <Button loading variant="soft">
        Loading
      </Button>
      <Button loading variant="soft">
        <BookmarkIcon /> Loading with Icon
      </Button>
      <Button disabled variant="soft">
        <Spinner loading>
          <BookmarkIcon />
        </Spinner>{" "}
        Custom Loading
      </Button>
    </Flex>

    {/* Disabled variations */}
    <Flex gap="3">
      <Button disabled variant="classic">
        Disabled Classic
      </Button>
      <Button disabled variant="solid">
        Disabled Solid
      </Button>
      <Button disabled variant="soft">
        Disabled Soft
      </Button>
      <Button disabled variant="surface">
        Disabled Surface
      </Button>
      <Button disabled variant="outline">
        Disabled Outline
      </Button>
    </Flex>
  </Flex>
);
