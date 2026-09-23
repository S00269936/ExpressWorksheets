import express, {Application, Request, Response} from "express" ; 
import carRoutes from './routes/cars';
import {connectDB} from './config/database';



const PORT = env.port;

 

const app: Application = express();


app.get("/ping", async (_req : Request, res: Response) => { 
    res.json({ 

 message: "hello from Zac"  ,
 message2: "hello from zac 2"

 }); 

}); 

app.get('/orange', async (_req : Request, res: Response) => {
    res.json({
        message: "orange is a fruit",
        message2: "orange is also a color",
        message3: "orange is also a programming language",
        message4: "i like oranges"
    });
});

app.use((req, _res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
})

app.use(express.json()); 
 app.use('/api/v1/cars', carRoutes); //tell app to use the carRoutes for any requests that start with /cars


const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
startServer();