const { Schema, model } = require('mongoose');

// Regular expression for email validation
const emailValidator = [
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  "Please enter a valid email address",
];

// Define the user schema
const userSchema = new Schema(
  {
    // User's username
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    // User's email
    email: {
      type: String,
      required: true,
      unique: true,
      match: emailValidator,
    },
    // Array of thought references
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // Array of user references (friends)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // Include virtual properties in JSON output
    toJSON: {
      virtuals: true,
    },
    // Exclude the default 'id' field
    id: false,
  }
);

// Define a virtual property 'friendCount' to get the number of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create the User model using the userSchema
const UserModel = model('User', userSchema);

// Export the UserModel
module.exports = UserModel;
