import mongoose, { Schema, Document, Model } from "mongoose";

interface IMessage extends Document {
  name: string;
  email: string;
  message: string;
}

const MessageSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 1000,
      trim: true,
    },
  },
  { timestamps: true }
);

const Message: Model<IMessage> =
  mongoose.models.Message || mongoose.model<IMessage>("Message", MessageSchema);

export default Message;
