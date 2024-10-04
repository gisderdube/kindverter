'use server'
import OpenAI from 'openai'
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
  organization: process.env.OPEN_AI_ORGANIZATION,
  project: process.env.OPEN_AI_PROJECT,
})

function buildPrompt(text: string, category: 'love' | 'tinder' | 'professional' | 'child' | 'riddle') {
  const technicalInstructions =
    'Please give me three different versions of the text. Please give me the results directly without any context. Separate the different versions by the following characters: ---'

  switch (category) {
    case 'love':
      return `Please convert the following text to a nicer way. 
        Please convert this to a love message and make the other person feel loved and valued. Use emojis, if necessary. Here is the text: ${text}
        
        ${technicalInstructions}
        `
    case 'tinder':
      return `I am active on a dating app and want to convince the other person to go out with me. Finally, I want to go out with the person and make them fall in love with me. Help me craft an amazing message that will make them fall in love with me already! Please make it a little bit funny and tease them if necessary.

        Please convert this message according to my instructions. Here is the text: ${text}
        
        ${technicalInstructions}`
    case 'professional':
      return `Please convert the text below in a professional way. I am trying to get a job and need to improve the text that I've written. 

       Please craft a professional message that will convince the other person to hire me. Be very polite, yet approachable and confident. Here is the text: ${text}
        
      ${technicalInstructions}`
    case 'child':
      return `I am talking to a child. Sometimes, I have trouble condensing my thoughts to a simple sentence. 
      Please help me by converting the following text into a simpler way that any child can understand. 
      If I sound negativ or if I swear, please convert the message to a child-friendly version. 
      Here is the text: ${text}

      ${technicalInstructions}`
    case 'riddle':
      return `Please create a riddle for me. I want to use it in a game. Please create a riddle that is funny and challenging. 
      
      Please base the riddle on the following text below. Please don't include the answer in the riddle. 
      Here is the text: ${text}

      ${technicalInstructions}`
  }
}

export async function convertText(
  text: string,
  category: 'love' | 'tinder' | 'professional' | 'child' | 'riddle'
) {
  const prompt = buildPrompt(text, category)

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  })
  console.log('completion:', JSON.stringify(completion, null, 2))

  return completion.choices[0].message.content
}
