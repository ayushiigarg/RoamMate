import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate : [validator.isEmail, "Please use a valid email address"]
    },
password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
        validator: function(value) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(value) && !/password/i.test(value);
        },
        message: "Invalid password. Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long."
    }
},
  trips: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trip",
    },
  ]

});
const User = mongoose.model("User",userSchema);
export default User;