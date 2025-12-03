import express from "express";
import { ENV } from "./config/env.js";
import {db} from "./config/db.js"
import { customerTable } from "./db/schema.js";
import job from "./config/cron.js";


const app = express();
const PORT = ENV.PORT || 5001;

if (ENV.NODE_ENV === "production") job.start();

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.status(200).json({success: true})
})

app.get("/api/Customer/:userId", async(req, res) => {
    try{
        const {userId} = req.params;
        await db.select().from(customerTable).where(eq(customerTable.userId,userId))
        res.status(200).json(customerTable)

    } catch(error){
        console.log("Error fetching a favorite", error);
        res.status(500).json({error: "Something went wrong"})
    }
})

app.post("/api/Customer", async (req, res) => {
    try{
        const {userId, userName, emailAddress, password, phoneNumber} = req.body;
        if (!userId || !userName || !emailAddress || !password){
            return res.status(400).json({error: "Missing requireed fields"});
        }
        const newCustomer = await db.insert(customerTable).values({
            userId,
            userName,
            emailAddress, 
            password,
            phoneNumber
        }).returning();
        res.status(201).json(newCustomer[0])
    } catch (error) {
        console.log("Error adding customer", error);
        res.status(500).json({error: "Something went wrong"})
    }
});

app.delete("api/favorites/:userId/:recipeId", async(req, res)=> {
    try{
        
    } catch (error){
        
    }
})

app.listen(5001, () => {
    console.log("Server is running on PORT:", PORT);
})