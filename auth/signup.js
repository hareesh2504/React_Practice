import { useState } from "react";
import "./output.css";
// import "./form.css";
import SignIn from "./signin";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


const SignUp = () => {
    const[userName,setUserName]=useState("")
    const[userPhone,setUserPhone]=useState("")
    const[userEmail,setUserEmail]=useState("")
    const[userPwd,setUserPwd]=useState("")

    const formSignUp = async () => {
        try {
            const Name = await createUserWithEmailAndPassword(auth, userName, setUserName);
            console.log(Name);
        } catch (err) {
            console.log(err.message);
        }
    }
    
    return (
        <div>
            <form className="form">
                <input type="text" value={userName} name="userName" className="formInput" onChange={(e)=>{setUserName(e.target.value)}}/>
                <label className="formLable">Full Name</label><br/>
                <input type="number" value={userPhone} name="userPhone" className="formInput" onChange={(e)=>{setUserPhone(e.target.value)}}/>
                <label className="formLable">Contact Number</label><br/>
                <input type="email" value={userEmail} name="userEmailID" className="formInput" onChange={(e)=>{setUserEmail(e.target.value)}}/>
                <label className="formLable">Email ID</label><br/>
                <input type="password" value={userPwd} name="userPwd" className="formInput" onChange={(e)=>{setUserPwd(e.target.value)}}/>
                <label className="formLable">Password</label><br/>
                <input type="submit" value="Submit" name="SubmitData" className="formInput btn"  onClick={formSignUp}/>
                <input type="reset" value="Reset" name="ResettData" className="formInput btn" />
            </form>
        </div>
    );
}

export default SignUp;