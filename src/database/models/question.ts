import mongoose from "mongoose";


interface question{
  question: string
  answer: string   
  points: number
  identifier: string
}

const questionSchema = new mongoose.Schema<question>({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  points: { type: Number, required: true },
  identifier: { type: String, default: "identifier" },
})

const questionModel = mongoose.model("questionmodel", questionSchema);


export default questionModel