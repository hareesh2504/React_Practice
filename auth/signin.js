import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./output.css"
import { auth } from "./firebase";
// import "./form.css";


const SignIn = () => {
    const [userEmail, setUserEmail] = useState("")
    const [userPwd, setUserPwd] = useState("")
    const formSignIn = async () => {
        // try {
        //     const Name = await createUserWithEmailAndPassword(auth, userEmail, setUserEmail);
        //     console.log(Name);
        // } catch (err) {
        //     console.log(err.message);
        // }
    }


return (
    <div>
        <form className="form" onSubmit={formSignIn} >
            <input type="email" value={userEmail} name="userEmailID" className="formInput" onChange={(e) => { setUserEmail(e.target.value) }} />
            <label className="formLable">Email</label><br /><br />
            <input type="password" value={userPwd} name="userPwd" className="formInput" onChange={(e) => { setUserPwd(e.target.value) }} />
            <label className="formLable">Password</label><br /><br />
            <input type="submit" value="Submit" name="SubmitData" className="btn" />
            <input type="reset" value="Reset" name="ResettData" className="btn" />
        </form>
    </div>
);
}

export default SignIn;