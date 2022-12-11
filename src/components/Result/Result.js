import Button from "../Button/Button";

import classes from "./Result.module.css";

const Result = ({ tipAmount, total, canReset, onReset }) => {
  return (
    <div className={classes.container}>
      <div className={classes.result}>
        <div>
          <div className={classes.title}>Tip Amount</div>
          <div className={classes.perPerson}>/ person</div>
        </div>
        <div className={classes.amount}>${tipAmount}</div>
      </div>

      <div className={classes.result}>
        <div>
          <div className={classes.title}>Total</div>
          <div className={classes.perPerson}>/ person</div>
        </div>
        <div className={classes.amount}>${total}</div>
      </div>

      <Button
        className={`${classes.resetBtn} ${
          canReset ? classes.ableResetBtn : classes.unableResetBtn
        }`}
        onClick={onReset}
      >
        RESET
      </Button>
    </div>
  );
};

export default Result;
