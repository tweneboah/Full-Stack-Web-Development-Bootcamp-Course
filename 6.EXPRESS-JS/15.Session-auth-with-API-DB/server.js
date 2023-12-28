const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const bcrypt = require("bcryptjs");
const app = express();

//Connect to mongoose
mongoose
  .connect("mongodb://localhost:27017/userAuthDB")
  .then(() => {
    console.log("DB has been connected");
  })
  .catch((e) => {
    console.log(e);
  });
//Create the userSchema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});
//Compile the schema to form model
const User = mongoose.model("User", userSchema);

//!Middlewares
app.use(express.json());

//-----CUSTOM MIDDLEWARES-----
//!--isAuthenticated (Authentication)
const isAuthenticated = (req, res, next) => {
  //Check the user in the session
  const username = req.session.userData ? req.session.userData.username : null;
  try {
    if (username) {
      return next();
    } else {
      res.send("You are not login");
    }
  } catch (error) {
    console.log(error);
  }
};
//!-isAdmin (Authorization)
const isAdmin = (req, res, next) => {
  if (req.session.userData && req.session.userData.role === "admin") {
    return next();
  } else {
    res.send("Fobidden: You do not have access, admin only");
  }
};

//!--configure Express Session---
app.use(
  session({
    secret: "my-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 60 * 1000, //Expires in one hr
    },
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/userAuthDB",
    }),
  })
);
//Home Route
app.get("/", (req, res) => {
  console.log(req.session);
  res.json({ message: "Welcome to the API" });
});

//Admin Route (Admin page)
app.get("/admin-only", isAuthenticated, isAdmin, (req, res) => {
  //we have access to the login as req.userData
  // console.log(req.userData);
  res.json({
    message: "Welcome to admin route",
  });
});

//Register Logic (register form)
app.post("/register", async (req, res) => {
  //!Destructure the req.body
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    password: hashedPassword,
  });
  res.json({
    message: "You have registered successfully",
    user: {
      user: newUser.username,
      role: newUser.role,
    },
  });
});

//Login Route logic
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //!. Find the user in the db
  const userFound = await User.findOne({
    username,
  });
  if (userFound && (await bcrypt.compare(password, userFound.password))) {
    //! Create session
    //! Add the login user ton session
    req.session.userData = {
      username: userFound.username,
      role: userFound.role,
    };
    res.json({
      message: "You have logged in successfully",
    });
  } else {
    res.json({
      message: "Invlaid login credentials",
    });
  }
});

//Dashboard Route
app.get("/dashboard", (req, res) => {
  //Take the login user from session

  const username = req.session.userData ? req.session.userData.username : null;
  //! Render the template
  if (username) {
    res.json({
      message: "Welcome to your dashboard",
      user: username,
    });
  } else {
    res.json({
      message: "Unauthorized, login before",
    });
  }
});

//Logout Route
app.get("/logout", (req, res) => {
  //!Logout
  req.session.destroy();
  res.json({
    message: "Logout success",
  });
});

//start the server
app.listen(3002, console.log("The server is running"));
