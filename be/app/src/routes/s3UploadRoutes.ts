import { Router } from "express";

const currentRouter: Router = Router();

currentRouter.post("/localUpload", (req, res) => {
  console.log(req, res);
});

export default currentRouter;
