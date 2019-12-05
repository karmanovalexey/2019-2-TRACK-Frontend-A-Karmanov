import React from 'react';
import ChatList from '../ListComponents/ChatList';
import ConvWindow from '../ConversationComponents/ConvWindow';
import styles from '../styles/list.module.css';

export default class MessengerContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleChatOpen = this.handleChatOpen.bind(this);
		this.handleChatClosed = this.handleChatClosed.bind(this);
		this.ChatList=(
			<ChatOpenContext.Provider value={this.handleChatOpen} >
				<ChatList/>
			</ChatOpenContext.Provider>
		);
		this.ConvWindow = (id, name) => {
			return (
				<ChatClosedContext.Provider value={this.handleChatClosed}>
					<ConvWindow chatId={id} companionName={name}/>
				</ChatClosedContext.Provider>
			);
		};
    
		this.state = {
			currentModule: this.ChatList,
		};
	}

	handleChatOpen(event) {
		let { target } = event;
		while (target.className !== styles.chatform) {
			target = target.parentElement;
			if (target === null) {
				return;
			}
		}
		const openedChatId = target.getAttribute('id');
		const openedChatName = target.getAttribute('companion');
		this.setState({
			currentModule: this.ConvWindow(openedChatId, openedChatName),
		});
		event.preventDefault();
	}

	handleChatClosed(event) {
		this.setState({
			currentModule: this.ChatList
		});
		event.preventDefault();
	}

	render() {
		return(
			this.state.currentModule
		); 
	}
}

export const ChatOpenContext = React.createContext(MessengerContainer.handleChatOpen);
export const ChatClosedContext = React.createContext(MessengerContainer.handleChatClosed);
