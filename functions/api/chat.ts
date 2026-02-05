interface Env {
  API_KEY: string;
}

interface RequestBody {
  message: string;
  systemInstruction?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const apiKey = context.env.API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { message, systemInstruction } = await context.request.json() as RequestBody;

    // Gemini APIへのリクエスト (REST APIを使用)
    // Cloudflare Functions環境での依存関係トラブルを避けるため、fetchで直接叩きます
    const model = 'gemini-3-flash-preview'; // ガイドラインに基づき推奨モデルへ変更
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{
        parts: [{ text: message }]
      }],
      systemInstruction: systemInstruction ? {
        parts: [{ text: systemInstruction }]
      } : undefined,
      generationConfig: {
        temperature: 0.7
      }
    };

    const geminiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error("Gemini API Error:", errorText);
      throw new Error(`Gemini API Error: ${geminiResponse.statusText}`);
    }

    const data: any = await geminiResponse.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

    return new Response(JSON.stringify({ response: responseText }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};