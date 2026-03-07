import React, { useState } from "react";
import "./LoginSignUp.css";

const LoginSignUp = () => {
    const [action, setAction] = useState("Sign Up");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log(JSON.stringify(data));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>

                <div className="inputs">
                    {action === "Sign Up" && (
                        <div className="input">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                            />
                        </div>
                    )}

                    <div className="input">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                        />
                    </div>

                    <div className="input">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                </div>

                {action === "Login" && (
                    <div className="forgot-password">
                        Forgot Password? <span>Reset Here</span>
                    </div>
                )}

                {action === "Sign Up" && (
                    <div className="existing-account">
                        Have An Account?{" "}
                        <span onClick={() => setAction("Login")}>
              Login Here
            </span>
                    </div>
                )}

                <div className="submit-container">
                    {action === "Login" ? (
                        <button type="submit" className="submit">
                            Login
                        </button>
                    ) : (
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default LoginSignUp;