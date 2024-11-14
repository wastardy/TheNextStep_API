import mongoose from "mongoose";

const spaSchema = new mongoose.Schema({
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

// const Spa = mongoose.model('dynamic_spas', spaSchema);
// module.exports = Spa;

export default mongoose.model('dynamic_spas', spaSchema);