import express from "express";
import User from "../models/User.js";
import bcrypt, { hash } from "bcryptjs";

export const userRegister = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All feild are requried",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists, please login",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullname,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User register successfully",
      newUser,
    });
  } catch (error) {
    console.error("Register Route Server Error", error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found, please register",
      });
    }

    const mathcPassword = await bcrypt.compare(password, user.password);
    if (!mathcPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User Loggedin successfully",
      data: {
        name: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Register Route Server Error", error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
