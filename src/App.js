import Calculator from "./containers/Calculator/Calculator";
import Logo from "./assets/logo.svg";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.appBackground}>
      <div className={classes.appContainer}>
        <div className={classes.title}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={classes.appWrapper}>
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
