import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Utilities } from "../../utils/Utilities";

const ChangePassword = () => {
  const navigate = useNavigate();

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      const changePasswordFormData = {
        email: await e.target.email.value,
        password: await e.target.password.value,
        confirmPassword: await e.target.confirmPassword.value,
      };
      await Utilities.checkPassword(changePasswordFormData);
      if (!(await Utilities.changePassword(changePasswordFormData))) {
        return;
      }
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const changePwdForm = document.getElementById("changePasswordform");
    changePwdForm.onsubmit = (e) => {
      e.preventDefault();
      changePassword(e);
    };
  });

  return (
    <main>
      <section className="register-main">
        <header>
          <h3 className="register-head">Change Password</h3>
        </header>
        <br />
        <form id="changePasswordform" className="login-content">
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
          <br />
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="password">New Password</label>
              <br />
              <input
                type="password"
                id="password"
                required={true}
                placeholder="Enter Password"
              />
            </div>
            <div className="form-col">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <br />
              <input
                type="password"
                id="confirmPassword"
                required={true}
                placeholder="Enter the password again"
              />
            </div>
          </div>
          <button type="submit" id="changepwdbtn">
            Change Password
          </button>
        </form>
        <br />
        <br />
      </section>
    </main>
  );
};

export default ChangePassword;
