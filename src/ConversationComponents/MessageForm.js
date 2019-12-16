import React from 'react';
import styles from '../styles/chat.module.css';

function MessageForm(props) {
	let displayAudio = 'none';
	if(props.audio_src !== ''){
		displayAudio = 'flex';
	}
	return(
		<div className={ styles.message_form} id={props.id}>
			<div className={ styles.bubble }>
				<div className={ styles.text } >
					{ props.messageText }
					<img src={props.img_src} alt='' width="100%" ></img>
					<audio src={props.audio_src} alt='' width="100%" controls style={{display: displayAudio}}></audio>
				</div>
				<div className={ styles.time }>{ props.messageTime }</div>
			</div>
		</div>
	);
}

export default MessageForm;
