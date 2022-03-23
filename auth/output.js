import "./output.css";
import { createUserWithEmailAndPassword } from "firebase/auth";


const Output = () => {
    const logOut = async () => {
        
    }

    return (
        <div>
            <p>Welcome {userName}, You Are Sucessfully LogIN To The Page.</p>
            <div>You Entered Contact Number is <b>{userPhone}</b></div>
            <h3>Enjoy The Experience</h3>
            <button onClick={logOut} className="btn">Log OUT</button>
        </div>
    );
}

export default Output;