export class Utilities {
  //validate the user
  static validateNewUser = async (user) => {
    let validationMessage = "";
    const pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const pwdValidationResult = pwdRegex.test(await user.password);
    
    //password validation
    if (!pwdValidationResult) {
      validationMessage =
        "The password should be minimum 8 characters long with atleast one upper, one lower case character and one number \n\n";
    }
    //phone validation
    if (await user.phone.split("-")[1].length !== 10) {
      validationMessage += "The phone number should be 10 digit long; \n\n";
    }

    //gender validation
    if (!await user.gender) {
      validationMessage += "Please select the gender \n\n";
    }

    if (validationMessage) {
      throw new Error(validationMessage);
    } else {
      return true;
    }
  };

  //validate two password
  static checkPassword = async (passwdUser) => {

    let validationMessage = "";
    const pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const pwdValidationResult = pwdRegex.test(await passwdUser.password);
    //password validation
    if (!pwdValidationResult) {
      validationMessage =
        "The password should be minimum 8 characters long with atleast one upper, one lower case character and one number ";
    }

    if((await passwdUser.password) !== (await passwdUser.confirmPassword)){
      validationMessage = "Both the passwords should be same"
    }

    if (validationMessage) {
      throw new Error(validationMessage);
    } else {
      return true;
    }
  }

  //get user by email id
  static getUser = async ({ email }) => {
    const response = await fetch("https://warfarback.onrender.com/users");
    const users = await response.json();
    // check if users exist
    if (users.length > 0) {
      // then find
      const userFound = await users.find((eachUser) => eachUser.email === email);
      if (userFound) {
        return userFound; // user exists, then return that user
      } else {
        return false; //user not found
      }
    }
  };

  //add user to DB
  static addUser = async (user) => {
    try {
      //check if user already exists
      const userExists = await this.getUser(user);
      if (!userExists) {
        //post the new user to DB
        await fetch("https://warfarback.onrender.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        return true
      } else {
        return false
      }
    } catch (error) {
      throw error;
    }
    
  };

  static changePassword = async ({email, password}) => {
    try {
      //check if user already exists
      const userExists = await this.getUser({email});
      if (!userExists) {
        alert(`No user account registered for ${email}`);
        return false
      } else {
        userExists.password = password;
        await fetch(`https://warfarback.onrender.com/users/${email}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userExists),
        });
        alert(`Password is changed for ${email}`)
        return true
      }
    } catch (error) {
      throw error;
    }
  };


  // authenticate the user
  static authenticateUser = (formData, userFromDB) => {
    if (formData.password === userFromDB.password) {
      return userFromDB;
    } else {
      throw Error("The password does not match our database records");
    }
  };
}
