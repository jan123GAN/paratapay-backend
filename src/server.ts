import 'module-alias/register'; // Sabse pehli line honi chahiye
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, (): void => {
  console.log(`app is listening on PORT ${PORT}`);
});