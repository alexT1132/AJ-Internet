import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(2222);
console.log("Conected on port", 2222);
