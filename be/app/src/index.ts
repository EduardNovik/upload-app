import express from "express";
import localUploadRoutes from "./routes/localUploadRoutes.ts";
import type { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", localUploadRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
