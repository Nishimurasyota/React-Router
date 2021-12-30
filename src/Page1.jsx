import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <>
      <div>
        <h1>Page1</h1>
        <Link to="/page1/detailA">Page1詳細A</Link>
        <br />
        <Link to="/page1/detailB">Page1詳細B</Link>
      </div>
    </>
  );
};
