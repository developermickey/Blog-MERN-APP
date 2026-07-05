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
