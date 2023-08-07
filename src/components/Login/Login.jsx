import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Utilities } from "../../utils/Utilities";

const Login = () => {
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    // fetch form data
    const loginFormData = {
      email: await e.target.user.value,
      password: await e.target.pass.value,
    };
    //check if user exists in backend
    await Utilities.getUser(loginFormData)
      .then((user) => {
        if (user) {
          return user;
        } else {
          console.log("No user");
          throw new Error("Please register before you login");
        }
      })
      .then((user) => Utilities.authenticateUser(loginFormData, user))
      .then((user) => {
        localStorage.setItem("userName", user.name);
        const nav = document.getElementsByClassName("nav-links");
        nav[0].classList.remove("disable-nav");
        navigate("/home");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //called after the login completes the load event
  useEffect(() => {
    //get the login form
    const loginForm = document.getElementById("loginform");
    // bind the onSubmit event to login function
    loginForm.onsubmit = (e) => {
      e.preventDefault();
      login(e);
    };
  });

  return (
    <main>
      <section className="login-main">
        <header>
          <h3 className="login-head">Login</h3>
        </header>
        <br />
        <form className="login-content" id="loginform">
          <label htmlFor="name">Username</label> &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            id="user"
            required={true}
          />
          <br />
          <br />
          <label htmlFor="name">Password</label> &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="pass"
            required={true}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <br />
        <br />
        <div className="container extralogin">
          <span className="Fpassword">
            Forgot{" "}
            <span
              onClick={() => {
                navigate("/changePassword");
              }}
            >
              password?
            </span>
          </span>
          <span
            className="newUser"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </span>
        </div>
      </section>
    </main>
  );
};

export default Login;
