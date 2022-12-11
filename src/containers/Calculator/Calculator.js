import { useState, useEffect } from "react";

import Input from "../../components/Input/Input";
import TipSelect from "../../components/TipSelect/TipSelect";
import DollarIcon from "../../assets/icon-dollar.svg";
import PeopleIcon from "../../assets/icon-person.svg";
import Result from "../../components/Result/Result";

import classes from "./Calculator.module.css";

const Calculator = () => {
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(null);
  const [numOfPeople, setNumOfPeople] = useState(0);
  const [numOfPeopleErrorMsg, setNumOfPeopleErrorMsg] = useState(null);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    if ((bill > 0 || tipPercent !== null) && numOfPeople === 0) {
      setNumOfPeopleErrorMsg("Can't be zero");
    } else {
      setNumOfPeopleErrorMsg(null);
    }
  }, [bill, tipPercent, numOfPeople]);

  useEffect(() => {
    if (window.innerWidth >= 1440) {
      setIsMobileScreen(false);
    } else {
      setIsMobileScreen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1440) {
        setIsMobileScreen(false);
      } else {
        setIsMobileScreen(true);
      }
    });
  }, []);

  let tipAmount = 0;
  let total = 0;

  if (numOfPeople > 0) {
    tipAmount = (bill * (tipPercent || 0)) / 100 / numOfPeople;
    total = (bill * (100 + (tipPercent || 0))) / 100 / numOfPeople;
  }

  const handleReset = () => {
    setBill(0);
    setTipPercent(null);
    setNumOfPeople(0);
  };

  const renderInputsContainer = (inputs) => {
    if (!isMobileScreen) {
      return <div className={classes.inputsContainer}>{inputs}</div>;
    }
    return inputs;
  };

  return (
    <div className={classes.container}>
      {renderInputsContainer(
        <>
          <Input
            initialValue={bill.toString()}
            label="Bill"
            icon={<img src={DollarIcon} alt="dollar" />}
            onChange={(value) => setBill(Number(value))}
          />
          <TipSelect
            onChange={(value) => setTipPercent(Number(value))}
            initialSelect={tipPercent}
          />
          <Input
            initialValue={numOfPeople.toString()}
            label="Number of People"
            validator={(value) => ({
              isValid: Number.isInteger(value),
              formattedValue: value,
            })}
            icon={<img src={PeopleIcon} alt="people" />}
            onChange={(value) => setNumOfPeople(Number(value))}
            errorMsg={numOfPeopleErrorMsg}
          />
        </>
      )}

      <div className={classes.resultContainer}>
        <Result
          tipAmount={tipAmount.toFixed(2)}
          total={total.toFixed(2)}
          canReset={bill > 0 || tipPercent !== null || numOfPeople > 0}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default Calculator;
