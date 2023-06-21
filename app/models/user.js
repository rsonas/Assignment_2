let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            default: '',
            trim: true,
            required: "Username required"
        },

        password: {
            type: String,
            default: '',
            trim: true,
            required: "Password required"
        },

        email: {
            type: String,
            default: '',
            trim: true,
            required: "Email required"
        },

        created: {
            type: Date,
            default: Date.now
        },

        update: {
            type: Date,
            default: Date.now
        }
    },

    {
        collection: "users"
    }
);

//checks if password matches
UserSchema.methods.validPassword = function(password) {
    return password === this.password;
  };

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema)