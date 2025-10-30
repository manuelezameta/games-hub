import usePlatforms from "@/hooks/usePlatforms";
import { Button, Flex, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Flex marginBottom="10px">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button size="sm" variant="outline">
            Plataform
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {data?.map((platform) => (
                <Menu.Item key={platform.id} value={platform.slug}>
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  );
};

export default PlatformSelector;
