const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    imageUrl: { type: String, default: "", trim: true },
    type: { type: String, default: "", trim: true },
    description: { type: String, default: "", trim: true },
    startDay: { type: String, default: "", trim: true },
    endDay: { type: String, default: "", trim: true },
    contastants: { type: Array, default: [], trim: true },
  },
  {
    collection: "events",
  }
);
module.exports = mongoose.model("Event", EventSchema);
