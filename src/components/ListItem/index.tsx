import * as C from "./styles";
import { Item } from "../../types/Item";
import { ChangeEvent, useState } from "react";

type Props = {
  item: Item;
};

const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleCheckedDone = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    
  }

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckedDone}
      />
      <label>{item.name}</label>
    </C.Container>
  );
};

export default ListItem;
