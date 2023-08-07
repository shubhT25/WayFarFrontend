import React, { useEffect } from "react";
import { User } from "../../utils/User";
import { useNavigate } from "react-router-dom";
import { Utilities } from "../../utils/Utilities";

const Register = () => {
  const navigate = useNavigate();

  async function getGender(e) {
    if ((await e.target.fgender.checked) || e.target.mgender.checked) {
      return (await e.target.fgender.checked) ? "F" : "M";
    } else {
      return null;
    }
  }

  const register = async (e) => {
    e.preventDefault();
    try {
      const registerFormData = {
        email: await e.target.email.value,
        password: await e.target.password.value,
        name: await e.target.name.value,
        id: await e.target.email.value,
        gender: await getGender(e),
        phone: (await e.target.code.value) + "-" + e.target.phone.value,
      };

      await Utilities.validateNewUser(registerFormData);
      const newUser = new User(
        registerFormData.id,
        registerFormData.email,
        registerFormData.password,
        registerFormData.name,
        registerFormData.gender,
        registerFormData.phone
      );
      if (await Utilities.addUser(newUser)) {
        alert("User registered, Please Login");
        navigate("/login");
      } else {
        alert("user email already present");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const registerForm = document.getElementById("registerform");
    registerForm.onsubmit = (e) => {
      e.preventDefault();
      register(e);
    };
  });

  return (
    <main>
      <section className="register-main">
        <header>
          <h3 className="register-head">Register with us</h3>
        </header>
        <br />
        <form id="registerform" className="login-content">
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="name" className="form-label">
                Name
              </label>
            </div>
            <br />
            <input
              id="name"
              type="text"
              placeholder="Ex : John Davis"
              required={true}
            />
          </div>
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="email">Email Id</label>
              <br />
              <input
                id="email"
                required={true}
                type="email"
                placeholder="Ex : john.davis@example.com"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                id="password"
                required={true}
                placeholder="Enter Password"
              />
            </div>
            <div className="form-col">
              <label htmlFor="code">Phone Number</label>
              <br />
              <select id="code" className="code">
                <option disabled>Code</option>
                <option value={+213}>+213</option>
                <option value={+91}>+91</option>
                <option value={+244}>+244</option>
                <option value={+61}>+61</option>
                <option value={+973}>+973</option>
              </select>
              <input
                id="phone"
                type="tel"
                pattern="^[0-9]{10}$"
                required={true}
                placeholder="Ex : 9897979086"
              />
            </div>
            <div className="form-col gender">
              <label>Female</label>
              <input type="radio" id="fgender" value="F" name="gender" />
              <br />
              <label>Male</label>
              <input type="radio" id="mgender" value="M" name="gender" />
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
        <br />
        <br />
        <br />
      </section>
    </main>
  );
};

export default Register;
