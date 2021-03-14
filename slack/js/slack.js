function slack() {
	const currentUser = 0
	let currentConversation = "c-0"
	const users = [
		{
			name: "Zack Webster",
			image: "images/users/1.jpg",
			online: true,
		},
		{
			name: "Emma Wilson",
			image: "images/users/2.jpg",
			online: true,
		},
		{
			name: "James Clark",
			image: "images/users/3.jpg",
			online: false,
		},
		{
			name: "Nova Lee",
			image: "images/users/4.jpg",
			online: true,
		},
	]
	const channels = [
		{ name: "general" },
		{ name: "features" },
		{ name: "announcements" },
		{ name: "tailwind" },
		{ name: "alpine" },
		{ name: "vue" },
		{ name: "react" },
		{ name: "laravel" },
		{ name: "livewire" },
	]
	const messages = [
		{
			conversationId: "c-0",
			userId: 0,
			text: "Holla",
		},
		{
			conversationId: "c-0",
			userId: 1,
			text:
				"Welcome to Slackish! A slack-ish clone built with Tailwind and Alpine.",
		},
		{
			conversationId: "c-0",
			userId: 2,
			text:
				"Head over to the features channel to see a list of features covered or added.",
		},
		{
			conversationId: "c-0",
			userId: 3,
			text: "Thanks for checking this out.",
		},
		{
			conversationId: "c-1",
			userId: 0,
			text: "Display user status indicator for DMs.",
		},
		{
			conversationId: "c-1",
			userId: 0,
			text: "Indicate active conversation in sidebar",
		},
		{
			conversationId: "u-0",
			userId: 0,
			text: "This is my personal message space.",
		},
		{
			conversationId: "u-1",
			userId: 1,
			text: "Let's serve this on Netlify.",
		},
		{
			conversationId: "u-1",
			userId: 0,
			text: "Sure!",
		},
	]

	function getConversableType(conversationId) {
		if (conversationId.split("-")[0] === "c") {
			return "channel"
		}
		return "user"
	}

	function getConversableId(conversationId) {
		return conversationId.split("-")[1]
	}

	function getConversationTitle(conversationId) {
		if (getConversableType(conversationId) === "channel") {
			return "#" + channels[getConversableId(conversationId)].name
		} else {
			return users[getConversableId(conversationId)].name
		}
	}

	function getConversationMessages(conversationId) {
		return messages.filter(
			(message) => message.conversationId === conversationId
		)
	}

	return {
		currentUser,
		users,
		channels,
		messages,
		getConversableType,
		getConversableId,
		getConversationTitle,
		currentConversation,
		getConversationMessages,
	}
}
