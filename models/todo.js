import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  }
})

const Todo = mongoose.model("todo", TodoSchema);

export default Todo;
