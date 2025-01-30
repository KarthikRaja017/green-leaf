import CreateAccountForm from "../forms/createAccount";
import LeftSideBar from "../LeftSideBar";

const CreateAccount = () => {
    return (
      <div style={{display:'flex'}}>
        <LeftSideBar />
        <CreateAccountForm/>
      </div>
    );
  };
  export default CreateAccount;