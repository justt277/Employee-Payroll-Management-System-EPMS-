import UserSchema from "../Schemas/UserModel.js";
import bcrypt from "bcryptjs";


export const register = async (req, res) => {
    const { username , password } = req.body;

    const User = await UserSchema.create({
        username,
        password: bcrypt.hashSync(password, 10),
    });
    res.json(User);
};


export const login = async (req, res) => {
    const User = await UserSchema.findOne({ username : req.body.username});

    if (!User) {
        res.status(404).json("User not found");
    }
    const match = await bcrypt.compare(req.body.password, User.password);

    if (!match) {
        res.status(400).json("Wrong password");
    }
    res.json({message: "Login successful💌"});
}