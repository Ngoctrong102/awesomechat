import express from 'express';
import ChatController from "../controllers/chat.controller";
let router = express.Router();

router.get('/', ChatController.index);


module.exports = router;