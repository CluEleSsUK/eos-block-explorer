import React from "react";
import {formattedJson} from "../app/text";

const App = props =>
  <div>Current block: <pre>{formattedJson(props.block) || "wtf"}</pre></div>;

export default App;