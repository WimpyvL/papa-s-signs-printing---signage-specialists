
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "./prompts";

let chatSession: Chat | null = null;

const getApiKey = () => {
  return process.env.GEMINI_API_KEY || process.env.API_KEY;
};

export const initializeChat = (): void => {
  try {
    const apiKey = getApiKey();
    if (!apiKey) {
      console.warn("Gemini API Key not found in environment variables.");
      return;
    }

    const ai = new GoogleGenAI({ apiKey });
    
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "I'm having trouble connecting to the server right now. Please ensure the API key is configured.";
  }

  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    return "I'm having trouble connecting to the server right now. Please try again later or contact us directly.";
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error?.message?.includes("API_KEY_INVALID")) {
      return "The API key provided is invalid. Please check your configuration.";
    }
    return "Sorry, I encountered an error processing your request. Please try again.";
  }
};
