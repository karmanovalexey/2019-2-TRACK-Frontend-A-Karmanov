import React, { useState } from 'react';
import styles from '../styles/chat.module.css';
import ConvHeader from './ConvHeader';
import InputForm from './InputForm';
import MessageForm from './MessageForm';

function ConvWindow(props) {
	let messageCount = 0;
	const [inputValue, setInputValue] = useState('');
	const [messages, setMessages] = useState(InitChats());

	function handleChange(event) {
		const { value } = event.target;
		setInputValue(value);
	}

	function getMessageProps(messageObj) {
		const messageElemProps = {
			key: messageCount,
			messageText: messageObj.messageText,
			messageTime: new Date(messageObj.messageTime).toTimeString().slice(0, 5),
			companionName: messageObj.companion,
		};
		return messageElemProps;
	}

	function InitChats(){
		const storageMessageArray = JSON.parse(localStorage.getItem(props.chatId));
		if (storageMessageArray !== null) {
			const messagesInitArray = [];
			for (; messageCount < storageMessageArray.length; messageCount += 1) {
				const messageElemProps = getMessageProps(storageMessageArray[messageCount]);

				messagesInitArray.push(
					<MessageForm
						key={messageElemProps.key}
						messageText={messageElemProps.messageText}
						messageTime={messageElemProps.messageTime}
						companionName={messageElemProps.companionName}
					/>,
				);
			}
			return messagesInitArray;
		}
		return [];
	}

	function handleCreateMessage(){
		if (inputValue!=='') {
			const messageObj = {
				key: messageCount,
				companion: props.companionName,
				messageText: inputValue,
				messageTime: new Date(),
			};
			addMessage(messageObj);
			messageToLocal(messageObj);
			messageCount += 1;
			setInputValue('');
		}
	}

	function addMessage(messageObj){
		const messageElemProps = getMessageProps(messageObj);
		setMessages(
			messages.concat(
				<MessageForm
					key={messageElemProps.key}
					messageText={messageElemProps.messageText}
					messageTime={messageElemProps.messageTime}
					companionName={messageElemProps.companionName}
				/>,
			),
		);
	}

	function messageToLocal(messageObj) {
		let storageMessageArray = JSON.parse(localStorage.getItem(props.chatId));
		if (storageMessageArray === null) {
			storageMessageArray = [];
		}
		storageMessageArray.push(messageObj);
		localStorage.setItem(+props.chatId, JSON.stringify(storageMessageArray));
	}

	function handleKeyPress(event) {
		if(event.key === 'Enter'){
			handleCreateMessage();
		}
	}

	return (
		<div className={styles.conv_window} onKeyPress={ handleKeyPress }>
			<ConvHeader />
			<div className={ styles.message_container }>
				{ messages }
			</div>
			<InputForm onChange={ handleChange } value={ inputValue } onSend={ handleCreateMessage }/>
		</div>
	);
}

export default ConvWindow;
