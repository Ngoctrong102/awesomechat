import express from 'express';
import { configViewEngine } from "./config/viewengine.config";

let app = express();
configViewEngine(app);
app.get('/',(req, res)=>{
    res.render('main/master');
});
app.get('/login',(req, res)=>{
    res.render('auth/master');
});
app.listen(3000,"localhost",()=>{
    console.log('Running...');
});