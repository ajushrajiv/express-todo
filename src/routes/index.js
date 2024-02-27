const { Router } = require("express");
const { AuthRouter } = require("./auth");
const  { MemberRouter } = require("./member");
const  { TodoRouter } = require("./todo");

const AppRouter = Router();

AppRouter.use("/auth", AuthRouter);
AppRouter.use("/member", MemberRouter);
AppRouter.use("/todo", TodoRouter);

module.exports = { AppRouter };