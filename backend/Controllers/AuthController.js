// const User = require("../model/UserModel");
// const { generateTokenAndSetCookie } = require("../util/SecretToken");
// const bcrypt = require("bcryptjs");
// // const { userVerification } = require("../Middlewares/AuthMiddleware");

// module.exports.signup = async (req, res) => {
//   try {
//     const { email, username, password, confirmPassword } = req.body;

//     if (password !== confirmPassword) {
//       return res.status(400).json({ error: "Passwords don't match" });
//     }

//     const user = await User.findOne({ username });

//     if (user) {
//       return res.status(400).json({ error: "Username already exists" });
//     }

//     // HASH PASSWORD HERE
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       email,
//       username,
//       password: hashedPassword,
//     });

//     if (newUser) {
//       // Generate JWT token here
//       generateTokenAndSetCookie(newUser._id, res);
//       await newUser.save();

//       res.status(201).json({
//         _id: newUser._id,
//         email,
//         username: newUser.username,
//       });
//     } else {
//       res.status(400).json({ error: "Invalid user data" });
//     }
//   } catch (error) {
//     console.log("Error in signup controller", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// module.exports.login = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Find user by username
//     const user = await User.findOne({ username });

//     // If user is not found, return an error
//     if (!user) {
//       return res.status(400).json({ error: "Invalid username or password" });
//     }

//     const isPasswordCorrect = bcrypt.compare(
//       password,
//       user ? user.password : ""
//     );

//     if (!isPasswordCorrect) {
//       return res.status(400).json({ error: "Invalid username or password" });
//     }

//     // Generate JWT token and set cookie
//     generateTokenAndSetCookie(user._id, res);

//     res.status(200).json({
//       _id: user._id,
//       username: user.username,
//     });
//   } catch (error) {
//     console.log("Error in login controller", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }

// };

// module.exports.logout = (req, res) => {
//   try {
//     res.cookie("jwt", "", { maxAge: 0 });
//     res.status(200).json({ message: "Logged out successfully" });
//   } catch (error) {
//     console.log("Error in logout controller", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// module.exports.Signup = async (req, res) => {
//   try {
//     const { email, username, password, confirmPassword, createdAt } = req.body;

//     if (password !== confirmPassword) {
//       return res.status(400).json({ error: "passwords do not match" });
//     }
//     const user = await User.findOne({ username });
//     if (user) {
//       return res.status(400).json({ error: "user already exists" });
//     }

//     const newUser = new User({
//       email,
//       username,
//       password,
//     });

//     await newUser.save();
//     res.status(201).json({
//       _id: newUser._id,
//       fullName: newUser.fullName,
//       username: newUser.username,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports.Login = (req, res) => {
//   console.log("loginUser");
// };

// module.exports.logout = (req, res) => {
//   console.log("logoutUser");
// };
const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}