import mongoose from "mongoose";

const cafeSchema = new mongoose.Schema({
    photo_url: String,
    name: String,
    address: String,
    rating: Number,
    location: {
        lat: Number,
        lng: Number,
    },
    place_id: String,
});

// const Cafe = mongoose.model('dynamic_cafes', cafeSchema);
// module.exports = Cafe;

export default mongoose.model('dynamic_cafes', cafeSchema);