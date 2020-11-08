import mongoose, { Schema } from "mongoose";

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@shared-hobby-wezhl.mongodb.net/test?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.info("Successfully connected to mongodb");
  })
  .catch((err) => {
    console.error("Unable to connectt to mongodb");
    console.error(err);
  });

export const WordVotes = mongoose.model(
  "muselunden.votes",
  new Schema(
    {
      word: String,
      viewed: Number,
      up: Number,
      down: Number,
    },
    {
      strict: true,
    }
  )
);
