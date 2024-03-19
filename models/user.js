const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        username: {
            type: String,
            unique: true,
            required: 'Username is required',
            trim: true
        },
        email: {
            type: String,
            required: 'Email is required',
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }
);

userSchema
    .virtual('friendCount')
    .get(() => {
        if (this.friends) {
            return this.friends.length;
        } else return 0;
    });

const User = model('User', userSchema);

module.exports = User;