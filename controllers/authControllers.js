const User = require("../models/User");

const registrar = async (req, res) => {
    try {
    const {email, password} = req.body;
    const hash= await bcrypt.hash(password, 10);
    
    
    await User.insert({email: email, hash: hash});
    res.status(200).json("todo bien");
    }catch(e) {
    console.log(e);
    res.status(588).send("error");
    }
    };