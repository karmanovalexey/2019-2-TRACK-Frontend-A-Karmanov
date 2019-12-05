import React from 'react';
import styles from '../styles/chat.module.css';

function MessageContainer(props) {
	return(
		<div className={ styles.message_container }>
			{props.messages}
		</div>
	);
}

export default MessageContainer;
