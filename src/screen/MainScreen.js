import React, { useState } from "react";

import styles from "./styles.module.css";

import {
  TextField,
  Snackbar,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import TableComp from "./TableComp";

const MainScreen = () => {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  let denomination = [10, 20, 50, 100, 200, 500, 1000];

  const [amount, setAmount] = useState("");

  const [notesArray, setnotesArray] = useState([]);

  const [selected, setSelected] = useState(null);

  const [show, setShow] = useState(false);

  const [showTable, setShowTable] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  let tempAmount = amount;
  let resultArray = [];

  let tempArray = denomination.sort((a, b) => b - a);

  const handleAmount = () => {
    if (tempAmount > 0) {
      if (!selected) {
        let notes1000 = Math.floor(tempAmount / 1000);
        let notes500 = Math.floor((tempAmount - notes1000 * 1000) / 500);
        let notes200 = Math.floor(
          (tempAmount - (notes1000 * 1000 + notes500 * 500)) / 200
        );
        let notes100 = Math.floor(
          (tempAmount - (notes1000 * 1000 + notes500 * 500 + notes200 * 200)) /
            100
        );
        let notes50 = Math.floor(
          (tempAmount -
            (notes1000 * 1000 +
              notes500 * 500 +
              notes200 * 200 +
              notes100 * 100)) /
            50
        );

        let notes20 = Math.floor(
          (tempAmount -
            (notes1000 * 1000 +
              notes500 * 500 +
              notes200 * 200 +
              notes100 * 100 +
              notes50 * 50)) /
            20
        );

        let notes10 = Math.floor(
          (tempAmount -
            (notes1000 * 1000 +
              notes500 * 500 +
              notes200 * 200 +
              notes100 * 100 +
              notes50 * 50 +
              notes20 * 20)) /
            20
        );
        resultArray.push(notes1000);
        resultArray.push(notes500);
        resultArray.push(notes200);
        resultArray.push(notes100);
        resultArray.push(notes50);
        resultArray.push(notes20);
        resultArray.push(notes10);
      } else {
        if (selected === 1000) {
          let notes1000 = Math.floor(tempAmount / 1000);
          let notes500 = Math.floor((tempAmount - notes1000 * 1000) / 500);
          let notes200 = Math.floor(
            (tempAmount - (notes1000 * 1000 + notes500 * 500)) / 200
          );
          let notes100 = Math.floor(
            (tempAmount -
              (notes1000 * 1000 + notes500 * 500 + notes200 * 200)) /
              100
          );
          let notes50 = Math.floor(
            (tempAmount -
              (notes1000 * 1000 +
                notes500 * 500 +
                notes200 * 200 +
                notes100 * 100)) /
              50
          );

          let notes20 = Math.floor(
            (tempAmount -
              (notes1000 * 1000 +
                notes500 * 500 +
                notes200 * 200 +
                notes100 * 100 +
                notes50 * 50)) /
              20
          );

          let notes10 = Math.floor(
            (tempAmount -
              (notes1000 * 1000 +
                notes500 * 500 +
                notes200 * 200 +
                notes100 * 100 +
                notes50 * 50 +
                notes20 * 20)) /
              20
          );

          resultArray.push(notes1000);
          resultArray.push(notes500);
          resultArray.push(notes200);
          resultArray.push(notes100);
          resultArray.push(notes50);
          resultArray.push(notes20);
          resultArray.push(notes10);
        } else if (selected === 500) {
          let notes500 = Math.floor(tempAmount / 500);
          let notes200 = Math.floor((tempAmount - notes500 * 500) / 200);
          let notes100 = Math.floor(
            (tempAmount - (notes500 * 500 + notes200 * 200)) / 100
          );
          let notes50 = Math.floor(
            (tempAmount - (notes500 * 500 + notes200 * 200 + notes100 * 100)) /
              50
          );
          let notes20 = Math.floor(
            (tempAmount -
              (notes500 * 500 +
                notes200 * 200 +
                notes100 * 100 +
                notes50 * 50)) /
              20
          );
          let notes10 = Math.floor(
            (tempAmount -
              (notes500 * 500 +
                notes200 * 200 +
                notes100 * 100 +
                notes50 * 50 +
                notes20 * 20)) /
              10
          );
          resultArray.push(0);
          resultArray.push(notes500);
          resultArray.push(notes200);
          resultArray.push(notes100);
          resultArray.push(notes50);
          resultArray.push(notes20);
          resultArray.push(notes10);
        } else if (selected === 200) {
          let notes200 = Math.floor(tempAmount / 200);
          let notes100 = Math.floor((tempAmount - notes200 * 200) / 100);
          let notes50 = Math.floor(
            (tempAmount - notes200 * 200 + notes100 * 100) / 50
          );
          let notes20 = Math.floor(
            (tempAmount - notes200 * 200 + notes100 * 100 + notes50 * 50) / 20
          );
          let notes10 = Math.floor(
            (tempAmount -
              notes200 * 200 +
              notes100 * 100 +
              notes50 * 50 +
              notes20 * 20) /
              10
          );
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(notes200);
          resultArray.push(notes100);
          resultArray.push(notes50);
          resultArray.push(notes20);
          resultArray.push(notes10);
        } else if (selected === 100) {
          let notes100 = Math.floor(tempAmount / 100);
          let notes50 = Math.floor((tempAmount - notes100 * 100) / 50);
          let notes20 = Math.floor(
            (tempAmount - (notes100 * 100 + notes50 * 50)) / 20
          );
          let notes10 = Math.floor(
            (tempAmount - (notes100 * 100 + notes50 * 50 + notes20 * 20)) / 10
          );
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(notes100);
          resultArray.push(notes50);
          resultArray.push(notes20);
          resultArray.push(notes10);
        } else if (selected === 50) {
          let notes50 = Math.floor(tempAmount / 50);
          let notes20 = Math.floor((tempAmount - notes50 * 50) / 20);
          let notes10 = Math.floor(
            (tempAmount - (notes50 * 50 + notes20 * 20)) / 10
          );
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(notes50);
          resultArray.push(notes20);
          resultArray.push(notes10);
        } else if (selected === 20) {
          let notes20 = Math.floor(tempAmount / 20);
          let notes10 = Math.floor((tempAmount - notes20 * 20) / 10);
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(notes20);
          resultArray.push(notes10);
        } else {
          let notes10 = Math.floor(tempAmount / 10);
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(0);
          resultArray.push(notes10);
        }
      }

      setnotesArray(resultArray);

      setAmount("");
      setShowTable(true);
    } else {
      handleClick();
    }
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.atmDiv}>
        <h1 className={styles.heading}> ATM Machine</h1>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Entered amount should be greater than 0
          </Alert>
        </Snackbar>

        <TextField
          className={styles.input}
          variant="outlined"
          size="small"
          placeholder="Enter the amount you want to withdraw"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {selected && show && (
          <p className={styles.selected}>Selected Denomination : {selected}</p>
        )}

        <FormControlLabel
          control={<Checkbox color="primary" />}
          onChange={() => setShow(!show)}
          label="Do you want to select the denomination"
        />
        {show && (
          <div className={styles.secondaryBtnDiv}>
            {tempArray.map((item) => {
              return (
                <Button
                  variant="contained"
                  color="secondary"
                  key={item}
                  onClick={() => setSelected(item)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        )}
        <Button
          variant="contained"
          color="primary"
          className={styles.enterBtn}
          onClick={handleAmount}
        >
          Enter
        </Button>

        {showTable && (
          <div className={styles.table}>
            <TableComp notesArray={notesArray} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainScreen;
