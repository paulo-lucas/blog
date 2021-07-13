import mongoose from 'mongoose'

const TagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  image_url: {
    type: String
  }
})

export default mongoose.models.Tag || mongoose.model('Tag', TagSchema)