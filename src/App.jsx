import { BrowserRouter, Link, Switch, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
      </div>

      {/** Version5.3の時の記述方法 */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Page1">
          <Page1 />
        </Route>
        <Route path="/Page2">
          <Page2 />
        </Route>
      </Switch>

      {/* Version6以降の記述方法 */}
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes> */}
    </BrowserRouter>
  );
};
