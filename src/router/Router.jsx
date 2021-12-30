import { Switch, Routes, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page1Routes } from "./Page1Rotes";

export const Router = () => {
  return (
    <>
      {/** Version5.3の時の記述方法 */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/Page1"
          render={({ match: { url } }) => (
            <Switch>
              {Page1Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />
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
    </>
  );
};
