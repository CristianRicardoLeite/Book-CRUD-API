import express from "express";
import db from "./config/dbConnect.js";
import router from "./routes/router.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Connection Error'))
db.once("open", () => {
    console.log("This connection was successful")
})

const app = express()
app.use(express.json())
app.use(router)

routes(app)
export default app
