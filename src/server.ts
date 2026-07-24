import "module-alias/register.js"; // Sabse pehli line honi chahiye
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const DEFAULT_PORT = 3000;
const portValue = Number(process.env.PORT);
const PORT = Number.isInteger(portValue) && portValue >= 0 && portValue < 65536
  ? portValue
  : DEFAULT_PORT;

app.listen(PORT, (): void => {
  console.log(`app is listening on PORT ${PORT}`);
});