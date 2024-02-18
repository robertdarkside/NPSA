import asyncHandler from "express-async-handler";
import { User } from "../models/userModel.js";

export const loginDetails = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Please add all fields" });
  }

  // Checks if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "Invalid Credentials" });
  }

  // creates user details
  const user = await User.create({
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

// export const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     res.status(400);
//     return res.json({ message: "Please add all fields" });
//   }

//   // Check if user exists
//   const userExists = await User.findOne({ email });

//   if (userExists) {
//     res.status(400);
//     return res.json({ message: "User already exists" });
//   }

//   // hash password
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);

//   // create user
//   const user = await User.create({
//     name,
//     email,
//     password: hashedPassword,
//   });

//   if (user) {
//     res.status(201).json({
//       _id: user.id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(400).json({ message: "Invalid user data" });
//   }
// });
