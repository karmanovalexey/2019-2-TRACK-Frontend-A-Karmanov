import React from 'react';
import styles from '../styles/chat.module.css';
import send from '../assets/paper-plane.svg';
import attachment from '../assets/attachment.svg';

function InputForm(props){
	return (
		<div className= { styles.form_input } >
			<div className={ styles.line_block }>
				<input type="text" onChange={ props.onChange} value={ props.value }/>
				<div className={ styles.buttons }>
					<button className={ styles.attach }>
						<img className={ styles.attach_icon } src={ attachment } alt="attach" />
					</button>
					<button className={ styles.send } onClick={ props.onSend }>
						<img className={ styles.send_icon } src={ send } alt="send" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default InputForm;