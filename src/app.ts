import express, {Application, Request, Response} from "express" ; 

 

const PORT = process.env.PORT || 5050; 

 

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

 

app.listen(PORT, () => { 

 console.log("Server is running on port", PORT); 

 }); 