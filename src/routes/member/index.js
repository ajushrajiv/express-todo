const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const MemberRouter = Router();

let members = [{
    id:1, 
    firstName: "Adam",
    userId: 10
},{
    id:2, 
    firstName: "Alan",
    userId: 20
}]

// GET REQUESTS
// /v1/member/byid
MemberRouter.get("/byid", (req, res) => {
  const memberId = req.query.memberId;
  if (!memberId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  res.status(StatusCodes.OK).send("Get member by id");
});

// /v1/member/bymemberid
MemberRouter.post("/bymemberid", (req, res) => {
    const userId = req.query.userId;
    if (!userId) {
        res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.NO_CONTENT);
        return;
      }
  res.status(StatusCodes.OK).send("Get member by user id");
});

//GET return all members
// /v1/member/members
MemberRouter.get('/members',(req,res) => {
    res.status(StatusCodes.OK).json({members});
})

// PUT REQUESTS
// /v1/member/mark
MemberRouter.put("/mark", (req, res) => {
  res.status(StatusCodes.OK).send("member als erledeigt markieren");
});
MemberRouter.put("/update", (req, res) => {
  res.status(StatusCodes.OK).send("member aktuallisieren");
});

// POST REQUESTS
// /v1/member/create
MemberRouter.post("/create", (req, res) => {
  members.push(newMember);
  res.status(StatusCodes.OK).json({member: newMember});
});

// DELETE REQUEST
// /v1/member/delete
MemberRouter.delete("/delete", (req, res) => {
    const { memberId } = req.body;

    const deletedMembers = members.filter((item) => item.id !== memberId);
    profiles = deletedMembers;
  
    res.json({ deletedUserId: memberId });
});

module.exports = { MemberRouter };