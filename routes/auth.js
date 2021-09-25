const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
    
    const user = await new User({
        username: "Jhon",
        email:"john@gmail.com",
        password:"123456"
    })

    
    res.send("teste2");
    await user.save();
})

module.exports = router;