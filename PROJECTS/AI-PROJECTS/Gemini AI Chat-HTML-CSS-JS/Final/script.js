//apiKey=AIzaSyAPKoO_uftHbgiqe_sk5GTQnYCuaaQczK8

//URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAPKoO_uftHbgiqe_sk5GTQnYCuaaQczK8"

document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chatForm");
  const userInput = document.getElementById("userInput");
  const chatMessages = document.getElementById("chatMessages");
  const sendButton = document.getElementById("sendButton");
  //Auto-resize the textarea
  userInput.addEventListener("input", () => {
    userInput.style.height = "auto";
    userInput.style.height = userInput.scrollHeight + "px";
  });
  chatForm.addEventListener("submit", async (e) => {
    //prevent the browser default
    e.preventDefault();
    const message = userInput.value.trim();
    if (!message) return;
    //Todo: add user message to chat
    addMessage(message, true);
    //clear the input
    userInput.value = "";
    userInput.style.height = "auto";
    sendButton.disabled = true;
    //Todo:Show Typing
    const typingIndicator = showTypingIndicator();
    try {
      //Todo:Generate response-Function
      const response = await generateResponse(message);
      typingIndicator.remove();
      //Ad AI response
      addMessage(response, false);
    } catch (error) {
      typingIndicator.remove();
      addErrorMessage(error.message);
    } finally {
      sendButton.disabled = false;
    }
  });

  //Generate response
  async function generateResponse(prompt) {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAPKoO_uftHbgiqe_sk5GTQnYCuaaQczK8`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed  to generate the responaw");
    }
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  }

  //Add user message to chat
  function addMessage(text, isUser) {
    const message = document.createElement("div");
    message.className = `message ${isUser ? "user-message" : ""}`;
    message.innerHTML = `
    <div class="avatar ${isUser ? "user-avatar" : ""}">
    ${isUser ? "U" : "AI"}
    </div>
    <div class='message-content'>${text}</div>
    `;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  //show indicator
  function showTypingIndicator() {
    const indicator = document.createElement("div");
    indicator.className = "message";
    indicator.innerHTML = `
    <div class="avatar">AI</div>
    <div class="typing-indicator">
    <div class='dot'></div>
    <div class='dot'></div>
    <div class='dot'></div>
    </div>
    `;
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return indicator;
  }

  //Error message function
  function addErrorMessage(text) {
    const message = document.createElement("div");
    message.className = "message";
    message.innerHTML = `
        <div class="avatar">AI</div>
    <div class="message-content" style="color:red">
      Error: ${text}
    </div>
      `;
  }
});
