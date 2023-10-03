import { NextResponse } from "next/server";
const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/chat-bison-001";
const API_KEY = "AIzaSyBFUi8s_Y2Cs5DYSvDZYtIvpKZjKT8CPMk";

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const context = "";
const examples = [];

export async function GET(request) {
  try {
    const ques = new URL(request.url);
    const question = ques.toString().split("=")[1];
    let messages = [{ content: question }];

    const result = await client.generateMessage({
      model: MODEL_NAME,
      temperature: 0.25,
      candidateCount: 1,
      top_k: 40,
      top_p: 0.95,
      prompt: {
        context: context,
        examples: examples,
        messages: messages,
      },
    });

    console.log("First Response:", result[0].candidates[0]?.content);

    messages.push({ content: result[0].candidates[0]?.content });
    console.log("Resp " + messages[1]?.content);

    return new NextResponse( messages);
  } catch (error) {
    console.error("An error occurred:", error);
    return new NextResponse("error " + error);
  }
}
