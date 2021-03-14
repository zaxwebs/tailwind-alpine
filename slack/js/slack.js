function slack() {
	return {
		currentUser: 0,
		currentConversation: "c-0",
		users: [
			{
				name: "Zack Webster",
				image: "images/users/1.jpg",
				online: true,
				message: "",
			},
			{
				name: "Emma Wilson",
				image: "images/users/2.jpg",
				online: true,
				message: "",
			},
			{
				name: "James Clark",
				image: "images/users/3.jpg",
				online: false,
				message: "",
			},
			{
				name: "Nova Lee",
				image: "images/users/4.jpg",
				online: true,
				message: "",
			},
			{
				name: "Max Alexander",
				image: "images/users/5.jpg",
				online: true,
				message: "",
			},
			{
				name: "Elisa Fox",
				image: "images/users/6.jpg",
				online: false,
				message: "",
			},
		],
		channels: [
			{ name: "general", message: "" },
			{ name: "features", message: "" },
			{ name: "announcements", message: "" },
			{ name: "tailwind", message: "" },
			{ name: "alpine", message: "" },
			{ name: "vue", message: "" },
			{ name: "react", message: "" },
			{ name: "laravel", message: "" },
			{ name: "livewire", message: "" },
		],
		messages: initialMessages,
		updateCurrentConversation(conversationId) {
			this.currentConversation = conversationId
			this.updateScroll()
		},
		getConversableType() {
			if (this.currentConversation.split("-")[0] === "c") {
				return "channel"
			}
			return "user"
		},
		getConversableId() {
			return this.currentConversation.split("-")[1]
		},
		getConversable() {
			const id = this.getConversableId()
			if (this.getConversableType() === "channel") {
				return this.channels[id]
			} else {
				return this.users[id]
			}
		},
		getConversableString() {
			return (
				this.getConversableType() +
				"s" +
				"[" +
				this.getConversableId() +
				"]"
			)
		},
		getConversationTitle() {
			if (this.getConversableType() === "channel") {
				return "#" + this.channels[this.getConversableId()].name
			} else {
				return this.users[this.getConversableId()].name
			}
		},
		getConversationMessages() {
			return this.messages.filter(
				(message) => message.conversationId === this.currentConversation
			)
		},
		submitMessage() {
			const message = this.getConversable().message
			if (message === "") {
				return
			}
			this.getConversable().message = ""
			this.messages.push({
				conversationId: this.currentConversation,
				userId: this.currentUser,
				text: message,
			})
			this.updateScroll()
		},
		updateScroll() {
			setTimeout(() => {
				const chatBox = document.getElementById("chat-box")
				const chatBoxHeight = chatBox.scrollHeight
				chatBox.scrollTop = chatBoxHeight
			}, 0)
		},
	}
}
