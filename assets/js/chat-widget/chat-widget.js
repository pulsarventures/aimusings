class ChatWidget {
    constructor() {
        this.chatId = null;
        this.isOpen = false;
        //Custom Chatbot
        this.apiBaseUrl = 'https://6842-50-146-57-106.ngrok-free.app';
        this.init();
    }

    init() {
        this.createWidget();
        this.attachEventListeners();
    }

    createWidget() {
        const container = document.createElement('div');
        container.className = 'chat-widget-container';
        container.innerHTML = `
            <button class="chat-widget-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>
            <div class="chat-widget-window">
                <div class="chat-widget-header">
                    <span>AI Assistant (Beta) - Ask Me Anything</span>
                    <button class="chat-widget-close">&times;</button>
                </div>
                <div class="chat-widget-messages"></div>
                <div class="chat-widget-input">
                    <input type="text" placeholder="What would you like to know?">
                    <button>Send</button>
                </div>
            </div>
        `;
        document.body.appendChild(container);
    }

    attachEventListeners() {
        const button = document.querySelector('.chat-widget-button');
        const closeButton = document.querySelector('.chat-widget-close');
        const input = document.querySelector('.chat-widget-input input');
        const sendButton = document.querySelector('.chat-widget-input button');

        button.addEventListener('click', () => this.toggleChat());
        closeButton.addEventListener('click', () => this.toggleChat());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        sendButton.addEventListener('click', () => this.sendMessage());
    }

    toggleChat() {
        const window = document.querySelector('.chat-widget-window');
        this.isOpen = !this.isOpen;
        window.classList.toggle('active', this.isOpen);
    }

    async sendMessage() {
        const input = document.querySelector('.chat-widget-input input');
        const message = input.value.trim();
        
        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';
        this.showTypingIndicator();

        try {
            const response = await this.makeApiRequest(message);
            this.hideTypingIndicator();
            this.addMessage(response.response, 'bot');
        } catch (error) {
            this.hideTypingIndicator();
            this.addMessage('Sorry, there was an error processing your request.', 'bot');
            console.error('API Error:', error);
        }
    }

    async makeApiRequest(message) {
        const url = this.chatId 
            ? `${this.apiBaseUrl}/query?chat_id=${this.chatId}`
            : `${this.apiBaseUrl}/query`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: message })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        this.chatId = data.chat_id;
        return data;
    }

    addMessage(text, type) {
        const messagesContainer = document.querySelector('.chat-widget-messages');
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${type}-message`;
        messageElement.textContent = text;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    showTypingIndicator() {
        const messagesContainer = document.querySelector('.chat-widget-messages');
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        messagesContainer.appendChild(indicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const indicator = document.querySelector('.typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }
}

// Initialize the chat widget when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChatWidget();
}); 