import { Fragment } from "react";
import { Button } from "@mui/material";

export default function App() {
  return (
    <Fragment>
      <div className="bg-red-400 p-5 ">
        <h1 className="text-white">App Local</h1>
        <Button variant="contained">Contained</Button>
      </div>
    </Fragment>
  );
}
