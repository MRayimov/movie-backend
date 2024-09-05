import mongoose from "mongoose";
const cartoonsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Multfilmda nomi bo'lishi kerak"],
    unique: [true, "Bunaqa nomli multfilm oldin kiritlgan"],
  },
  releaseDate: {
    type: Date,
    required: [true, "Multfilm qachon chiqqani kiritilishi kerak"],
  },
  description: {
    type: String,
  },
  posterImage: {
    type: String,
    required: [true, "Multfilm rasmi kiritilishi kerak"],
    unique: true,
  },
  rating: {
    type: Number,
  },
  images: {
    type: [String],
  },
});
export const cartoonModel = mongoose.model("cartoons", cartoonsSchema);
