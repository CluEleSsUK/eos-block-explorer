import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/App";
import UnloadedApp from "./ui/UnloadedApp";
import {eos} from "./app/eos";

const placeToRender = document.getElementById("root");

const config = {
  httpEndpoint: "http://api1.eosdublin.io",
};

ReactDOM.render(<UnloadedApp/>, placeToRender);

const client = eos(config);

const renderBlock = block => ReactDOM.render(<App block={block} />, placeToRender);

(function renderNextBlock() {
  client.fetchNextBlockNumber()
    .then(client.fetchBlock)
    .then(renderBlock)
    .then(() => setTimeout(renderNextBlock, 1000));
})();
