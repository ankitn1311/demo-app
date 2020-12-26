import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";

export default function Rahul() {
  return (
    <div>
      Hello 5 from rahul
      <Button variant="contained" color="secondary">
        Click
      </Button>
      ankit
    </div>
  );
}

ReactDOM.render(<Rahul />, document.getElementById("root"));
