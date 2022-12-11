import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import classes from "./TipSelect.module.css";

const TipSelect = ({ initialSelect, onChange }) => {
  const [selection, setSelection] = useState(initialSelect);
  const [selectCustom, setSelectCustom] = useState(false);

  useEffect(() => {
    setSelection(initialSelect);
    if (initialSelect === null) {
      setSelectCustom(false);
    }
  }, [initialSelect]);

  const handleFixTipSelect = (value) => {
    setSelection(value);
    setSelectCustom(false);
    onChange(value);
  };

  const handleCustomSelect = () => {
    setSelectCustom(true);
    onChange(0);
  };

  return (
    <div>
      <div className={classes.label}>Select Tip %</div>
      <div className={classes.tipButtonsContainer}>
        <Button
          className={selection === 5 ? classes.selectedBtn : ""}
          onClick={() => handleFixTipSelect(5)}
        >
          5%
        </Button>
        <Button
          className={selection === 10 ? classes.selectedBtn : ""}
          onClick={() => handleFixTipSelect(10)}
        >
          10%
        </Button>
        <Button
          className={selection === 15 ? classes.selectedBtn : ""}
          onClick={() => handleFixTipSelect(15)}
        >
          15%
        </Button>
        <Button
          className={selection === 25 ? classes.selectedBtn : ""}
          onClick={() => handleFixTipSelect(25)}
        >
          25%
        </Button>
        <Button
          className={selection === 50 ? classes.selectedBtn : ""}
          onClick={() => handleFixTipSelect(50)}
        >
          50%
        </Button>
        {selectCustom ? (
          <Input
            initialValue={"0"}
            className={classes.input}
            onChange={onChange}
            autoFous
          />
        ) : (
          <Button className={classes.customBtn} onClick={handleCustomSelect}>
            Custom
          </Button>
        )}
      </div>
    </div>
  );
};

export default TipSelect;
