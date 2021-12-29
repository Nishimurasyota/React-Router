import { BrowserRouter } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Page1 />
        <Page2 />
      </div>
    </BrowserRouter>
  );
};
