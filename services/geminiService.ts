import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateConsultationResponse = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "APIキーが設定されていないため、AI機能を利用できません。";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "申し訳ございません。うまく回答できませんでした。もう一度お試しください。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "現在アクセスが集中しており、応答できません。しばらく経ってから再度お試しください。";
  }
};