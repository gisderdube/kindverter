"use server"
import OpenAI from "openai"
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
  organization: process.env.OPEN_AI_ORGANIZATION,
  project: process.env.OPEN_AI_PROJECT,
})

export async function convertText(text: string) {
  console.log("text", text)

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `Please convert the following text to a nicer way. 
        Please convert this to a love message and make the other person feel loved and valued. Use emojis, if necessary. Please use a turtle analogy in one of the versions. Here is the text: ${text}
        
        Please give me three different versions of the text. Please give me the results directly without any context. Separate the different versions by the following characters: ---`,
      },
    ],
  })
  console.log("completion:", JSON.stringify(completion, null, 2))

  return completion.choices[0].message.content
}
