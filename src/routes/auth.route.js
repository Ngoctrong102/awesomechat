import express from 'express';
import AuthController from "../controllers/auth.controller";
let router = express.Router();

router.get('/', AuthController.index);


module.exports = router;