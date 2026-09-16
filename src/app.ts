import express, {Application, Request, Response} from "express" ; 

 

const PORT = process.env.PORT || 5050; 

 

const app: Application = express();
app.get("/ping", async (_req : Request, res: Response) => { 
    res.json({ 

 message: "hello from zac"  ,
 message2: "hello from zac 2"

 }); 

}); 

 

app.listen(PORT, () => { 

 console.log("Server is running on port", PORT); 

 }); 