// Chat functionality encapsulated in an object
const Chat = {
    init() {
      // Initialize DOM elements
      this.aiChat = document.getElementById('ai-chat');
      this.chatWindow = document.getElementById('chat-window');
      this.chatInput = document.querySelector('.chat-input');
      this.maximizeButton = document.getElementById('maximize-chat');
      this.minimizeButton = document.getElementById('minimize-chat');
      this.closeButton = document.getElementById('close-chat');
      this.sendMessageButton = document.getElementById('send-message');
      this.chatMessageInput = document.getElementById('chat-message');
      this.reopenChatButton = document.getElementById('reopen-chat');  // New element
  
      // Event Listeners
      this.maximizeButton.addEventListener('click', () => this.toggleChat('maximize'));
      this.minimizeButton.addEventListener('click', () => this.toggleChat('minimize'));
      this.closeButton.addEventListener('click', () => this.toggleChat('close'));
      this.reopenChatButton.addEventListener('click', () => this.toggleChat('reopen'));  // New listener
      this.sendMessageButton.addEventListener('click', () => this.sendMessage());
      this.chatMessageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          this.sendMessage();
        }
      });
  
      // Initialize chat state
      this.toggleChat('minimize');
    },
  
    toggleChat(action) {
      switch(action) {
        case 'maximize':
          this.chatWindow.classList.add('active');
          this.chatInput.classList.add('active');
          this.maximizeButton.classList.add('hidden');
          this.minimizeButton.classList.remove('hidden');
          break;
  
        case 'minimize':
          this.chatWindow.classList.remove('active');
          this.chatInput.classList.remove('active');
          this.maximizeButton.classList.remove('hidden');
          this.minimizeButton.classList.add('hidden');
          break;
  
        case 'close':
          this.aiChat.classList.add('hidden');
          this.reopenChatButton.classList.remove('hidden');  // Show reopen button
          break;
  
        case 'reopen':
          this.aiChat.classList.remove('hidden');  // Show chat
          this.reopenChatButton.classList.add('hidden');  // Hide reopen button
          this.toggleChat('minimize');  // You can choose to maximize if you prefer
          break;
        case 'close':
          this.aiChat.classList.add('hidden');
          this.reopenChatButton.style.display = 'block';  // Show reopen button explicitly
          break;
  
        case 'reopen':
          this.aiChat.classList.remove('hidden');  // Show chat
          this.reopenChatButton.style.display = 'none';  // Hide reopen button explicitly
          this.toggleChat('minimize');  // You can choose to maximize if you prefer
          break;
      }
    },
  
    sendMessage() {
      const message = this.chatMessageInput.value;
      if (message) {
        // Append message to chat window
        this.chatWindow.appendChild(document.createTextNode(`You: ${message}`));
        this.chatWindow.appendChild(document.createElement('br'));
  
        // Reset the input field
        this.chatMessageInput.value = '';
  
        // Scroll to the bottom of the chat window
        this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
  
        // Here you can add code to send the message to the backend or AI service
      }
    }
  };
  
  // Initialize the chat functionality
  Chat.init();
  