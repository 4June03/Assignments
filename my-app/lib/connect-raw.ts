import { MongoClient } from "mongodb";
 
// Replace the following with your Atlas connection string                                                                                                                                        
const MONGODB_URL = "mongodb+srv://huunghia:lpn5M6D2ac3wjkok@cluster0.9nlgicz.mongodb.net/huunghiadb?retryWrites=true&w=majority&appName=Cluster0";
// Connect to your Atlas cluster

async function run2() {

    const client = new MongoClient(MONGODB_URL);
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.stack);
        } else {
            console.log(err);
        }
    }
    finally {
        await client.close();
    }
}
run2().catch(console.dir);