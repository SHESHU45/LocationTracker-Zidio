import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt";
import { UserInput, UserDocument } from "../types/user.type"
const bcryptSalt = process.env.BCRYPT_SALT;


const userSchema = new mongoose.Schema({
 firstName: {type: String, reqiured: true},

 lastName: {type: String, reqiured: true},

 email: {type: String, reqiured: true, unique: true},

 password: {type: String, reqiured: true,},
 

}, {
    timestamps: true
}) 


userSchema.pre("save", async function (next){
    let user = this as UserDocument;

    if(!user.isModified("password")) {
        return next();
    }
    const  salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hashSync(user.password, salt)

    user.password = hash;

    return next()
}) 

userSchema.methods.comparePassword = async function
(userPassword: string) : Promise<boolean> {
    const user = this as UserDocument

    return bcrypt.compare(userPassword, user.password).catch((e) => false)
};

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;