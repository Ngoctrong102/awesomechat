import ChatRouter from './chat.route';
import AuthRouter from './auth.route';


let initRoute = (app) => {
    app.use('/chat', ChatRouter);
    app.use('/auth', AuthRouter);
}


module.exports = initRoute;