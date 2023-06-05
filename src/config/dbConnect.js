import mongoose from "mongoose";

mongoose.connect("mongodb+srv://cristianricardoleite:123cristian123@node-express.sxkazrr.mongodb.net/Node-test")

let db = mongoose.connection

export default db