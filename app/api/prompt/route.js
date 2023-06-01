import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async () => {
    try {
        await connectToDb();
    
        const prompts = await Prompt.find({}).populate("creator");
    
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("failed to get prompts", { status: 500 });
    }
    }