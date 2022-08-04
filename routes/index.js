var express = require("express");
var router = express.Router();
const { requiresAuth } = require("express-openid-connect");

router.get("/", (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.render("index", {
    title: "iGoInvest",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  });
});

router.get("/dashboard", requiresAuth(), (req, res) => {
  if (req.oidc.isAuthenticated()) {
    console.log("auth");
    // find out how to pull details from auth0
    // make post request to backend to store user data - check axios
    // axios.post(`${process.env.API}/users/add`, {
    //     firstname: 'deb',
    //     lastname: 'lee',
    //     email
    // })
  }
  res.render("dashboard", {
    title: "Dashboard",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  });
});

module.exports = router;
