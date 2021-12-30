import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onclickBack = () => history.goBack();

  return (
    <>
      <div>
        <h1>Page1詳細Aです</h1>
        <button onClick={onclickBack}>戻る</button>
      </div>
    </>
  );
};
