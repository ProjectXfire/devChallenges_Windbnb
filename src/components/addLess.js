import React, { useState, useEffect } from "react";
// Providers
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
// Styles
import { AddLess as AddLessStyled } from "../styles/addLess";
import { colors } from "../styles/colors";

export const AddLess = ({ setGuests, guests }) => {
  const [value, setValue] = useState(0);

  const add = () => {
    setValue(value + 1);
    setGuests(guests + 1);
  };
  const less = () => {
    if (value > 0) {
      setValue(value - 1);
      setGuests(guests - 1);
    }
  };

  useEffect(() => {
    if (guests === 0) {
      setValue(0);
    }
  }, [guests]);

  return (
    <AddLessStyled>
      <MdRemoveCircle size="25" color={colors.primary} onClick={() => less()} />
      <input type="text" readOnly value={value} />
      <MdAddCircle size="25" color={colors.primary} onClick={() => add()} />
    </AddLessStyled>
  );
};
