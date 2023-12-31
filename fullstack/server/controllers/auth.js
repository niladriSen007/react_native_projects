import { comparePassword, hashedPassword } from "../helpers/authHelper.js";
import {UserDetails} from "../models/userDetails.js";
import { createJwtToken } from "../utils/createJWTToken.js";

export const RegisterUser = async (req, res) => {
    // console.log(req?.body)
  const { name, email, password } = req?.body;

  if (!name || !email || !password) {
    return res.send({
      error: "Please provide all required fields.",
      missingFields: {
        name: !name,
        email: !email,
        password: !password,
      },
    });
  }

  try {
    const userExistOrNot = await UserDetails.findOne({ email: email });
    if (userExistOrNot)
      return res.status(403).send({
        success: false,
        message: "User account already exist",
      });

    const securedPass = await hashedPassword(password);
    const newUser = new UserDetails({ name, email, password: securedPass });

    // console.log(userWithToken)

    await newUser.save();

    const userToken = await createJwtToken(newUser);
    const userWithToken = { ...newUser, token: userToken };

    // console.log(userToken);

    // const userDetail = { ...newUser, token: userToken };

    const { name: userName, email: userEmail } = userWithToken._doc;
    // const { token } = userWithToken;

    const sharedUserDetails = { userName, userEmail };

    res.status(200).send({
      success: true,
      user: sharedUserDetails,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while registering the user",
      error: error,
    });
  }
};

export const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send({
      error: "Please provide all required fields.",
      missingFields: {
        email: !email,
        password: !password,
      },
    });
  }

  try {
    const userExistOrNot = await UserDetails.findOne({ email: email });
    if (!userExistOrNot)
      return res.status(403).send({
        success: false,
        message: "User noty exist",
      });

    const passworkCheck = await comparePassword(
      password,
      userExistOrNot.password
    );
    if (!passworkCheck) {
      return res.status(500).send({
        success: false,
        message: "Wrong Credentials",
      });
    }

    const userToken = await createJwtToken(userExistOrNot);
    const userWithToken = { ...userExistOrNot, token: userToken };

    const { name: userName, email: userEmail, _id: userId } = userWithToken._doc;
    const { token } = userWithToken;

    const sharedUserDetails = { userId,userName, userEmail, token };

    res.status(200).send({
      success: true,
      message:"Logged in successfully",
      user: sharedUserDetails,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while registering the user",
      error: error,
    });
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const { name, email, password } = req?.body;
    
    let securedPass;

    const userExistOrNot = await UserDetails.findOne({ email: email });

    if(password)
      securedPass = await hashedPassword(password);
    else
      securedPass = await hashedPassword(userExistOrNot?.password);
    // console.log(req?.body)
    // const { photo } = req.files;
    //alidation
    // switch (true) {
    //   case !name:
    //     return res.status(500).send({ error: "Name is Required" });
    //   case !email:
    //     return res.status(500).send({ error: "email is Required" });
    // }



    const newUser = await UserDetails.findByIdAndUpdate(
      req?.params?.id,
      { ...req?.body , password: securedPass },
      { new: true }
    );

    // console.log(product)
    await newUser.save();
    res.status(201).send({
      success: true,
      message: "User data Updated Successfully",
      newUser,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error while updating user",
      e,
    });
  }
};