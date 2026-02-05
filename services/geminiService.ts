import { AI_SYSTEM_INSTRUCTION } from '../constants';

export const generateConsultationResponse = async (userPrompt: string): Promise<string> => {
  try {
    // 自身のサーバーサイドのエンドポイント(/api/chat)を呼び出す
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userPrompt,
        systemInstruction: AI_SYSTEM_INSTRUCTION
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.response || "申し訳ございません。うまく回答できませんでした。";

  } catch (error) {
    console.error("API Error:", error);
    return "現在アクセスが集中しており、応答できません。しばらく経ってから再度お試しください。";
  }
};