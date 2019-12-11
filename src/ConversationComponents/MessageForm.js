import React from 'react';
import styles from '../styles/chat.module.css';

function MessageForm(props) {
	return(
		<div className={ styles.message_form} >
			<div className={ styles.bubble }>
				<div className={ styles.text } >{ props.messageText }</div>
				<div className={ styles.time } >{ props.messageTime }</div>
			</div>
		</div>
	);
}

export default MessageForm;
