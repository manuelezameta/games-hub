import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Order by Relevance
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value={"relevance"}>Relevance</Menu.Item>
            <Menu.Item value={"relevance"}>Date added</Menu.Item>
            <Menu.Item value={"name"}>Name</Menu.Item>
            <Menu.Item value={"relevance"}>Release date</Menu.Item>
            <Menu.Item value={"relevance"}>Popularity</Menu.Item>
            <Menu.Item value={"relevance"}>Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
