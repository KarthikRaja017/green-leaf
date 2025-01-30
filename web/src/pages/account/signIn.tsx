import Login from "../forms/loginAccount";
import LeftSideBar from "../LeftSideBar";

const LoginAccount = () => {
  return (
    <div style={{ display: 'flex' }}>
      <LeftSideBar />
      <Login/>
    </div>
  );
};

export default LoginAccount;
