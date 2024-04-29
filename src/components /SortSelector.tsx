import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronBarRight } from "react-icons/bs";

interface Props {
  onSelectOrder: (order: string) => void;
  sortOrder: string;
}



const SortSelector = ({ onSelectOrder, sortOrder }: Props) => {
    const SortOrders = [
      { value: "", label: "Relevance" },
      { value: "-added", label: "Date added" },
      { value: "name", label: "Name" },
      { value: "-released", label: "Release date" },
      { value: "-metacritics", label: "Popularity" },
      { value: "-rating", label: "Average rating" },
    ];
    const currentOrder = SortOrders.find(order=> order === sortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarRight />}>
        Order by : Relevance
      </MenuButton>
      <MenuList>
        {SortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectOrder(order.value)}
            value={order.value}
          >
            {" "}
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
