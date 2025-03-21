import { useState } from "react";


export default function SignUpForm() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

async function handleSubmit(event) {
  event.preventDefault();
  try {
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST", 
        headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
    );

    if (response.ok) {
      console.log("Signup successful");
    } else {
      throw response;
  } 
} catch (error) {
    setError("Error during signup");
  }
}

// Navigate back to Signupform component and deconstruct the setToken fx from props.
//  Now, let us use this function in our handleSubmit. Pass the token property of our API response to setToken.

// setToken(result.token);  Where does this line go?

return (
 <>
    <h2>Sign Up</h2>
    {error && <p>{error}</p>}
  <form onSubmit={handleSubmit}>          
    <label>Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
    </label>
    <label>Password: <input type= "password" value={password} onChange={(e) => setUsername(e.target.value)} /> 
    </label>
    <button type="submit">Submit</button>
  </form>
  </>
);
}

