import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    formatted_title: {
      type: String,
      required: true,
      index: true,
      unique: true
    },
    banner_url: {
      type: String
    },
    content: {
      type: String,
      required: true
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
      }
    ],
    accesses: {
      type: Number,
      default: 0
    },
  },
  {
    timestamps: true
  }
)

export default mongoose.models.Post || mongoose.model('Post', PostSchema)