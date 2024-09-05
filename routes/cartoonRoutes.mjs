import e from "express";
import { cartoonModel } from "../models/cartoonsModel.mjs";
const router = e.Router();

const getAllCartoons = async (req, res) => {
  const cartoons = await cartoonModel.find();
  res.status(200).json({
    status: "success",
    data: cartoons,
  });
};
const createCartoon = async (req, res) => {
  try {
    const newCartoon = await cartoonModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: { newCartoon },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
const deleteById = async (req, res) => {
  try {
    await cartoonModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const updateById = async (req, res) => {
  try {
    const cartoon = await cartoonModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: cartoon,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

router.route("/").get(getAllCartoons).post(createCartoon);
router.route("/:id").delete(deleteById).patch(updateById);
export default router;
