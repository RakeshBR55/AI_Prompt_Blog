import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  const { prompt, tag, imgUrl, userId } = await req.json();

  try {
    await connectToDb();

    const newPrompt = await Prompt.create({
      creator: userId,
      prompt,
      tag,
      imgUrl,
    });
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("failed to create prompt", { status: 500 });
  }
};
