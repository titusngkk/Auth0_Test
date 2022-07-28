var express = require("express")
var router = express.Router()
const { requiresAuth } = require('express-openid-connect')

router.get("/", (req, res) => {
    console.log(req.oidc.isAuthenticated());
    res.render("index", { 
    title: "iGoInvest", 
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
 });
});

router.get("/dashboard", requiresAuth(), (req, res) => {
    res.render("dashboard", { 
    title: "Dashboard", 
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
 });
});

module.exports = router;
