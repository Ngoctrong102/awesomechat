import express from 'express';
import { configViewEngine } from "./config/viewengine.config";
import connectDB from "./config/database.config";
// import models
import ContactModel from "./models/contact.model";
// Router
import initRoute from "./routes/web.route";



let app = express();

//config
configViewEngine(app);
connectDB();
initRoute(app);
// app.get('/testdb', async (req, res) => {
//     try {
//         let contact = {
//             userId: "321",
//             contactId: "123"
//         };
//         let ret = await ContactModel.createNew(contact);
//         res.send(ret);
//     } catch (error) {
//         console.log(error);
//     }
// });
// app.get('/contact', async (req, res) => {
//     res.send(await ContactModel.getAll());
// });
// app.get('/contact/:id', (req, res) => {
//     ContactModel.delete({userId:req.params.id});
//     res.send("oke")
// });

// app.get('/', (req, res) => {
//     res.render('main/master');
// });
// app.get('/login', (req, res) => {
//     res.render('auth/master');
// });



app.listen(3000, "localhost", () => {
    console.log('Running...');
});