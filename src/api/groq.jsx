export const generateChatResponse = async (messages, model, maxTokens) => {
  try {
    const response = await fetch('/api/chat', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages, model, maxTokens }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error generating chat response:", error);
    throw error;
  }
};
