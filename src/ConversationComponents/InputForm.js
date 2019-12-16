import React from 'react';
import styles from '../styles/chat.module.css';
import send from '../assets/paper-plane.svg';
import attachment from '../assets/attachment.svg';
import geo from '../assets/geo.svg';
import audio from '../assets/audio.svg';
import stop from '../assets/stop.svg'

function InputForm(props){

	function handleDrag(event){
		event.target.style.background = "darkolivegreen";
		event.stopPropagation();
		event.preventDefault();
	}

	function handleLeave(event){
		event.target.style.background = "";
		event.stopPropagation();
		event.preventDefault();
	}

	return (
		<div className= { styles.form_input } >
			<div className={ styles.line_block }>
				<input type="text" onChange={ props.onChange } value={ props.value } id="fileList" onDragOver={props.onDragOver} onDrop={props.onDrop} onDragEnter={ handleDrag } onDragLeave={ handleLeave }/>
				<div className={ styles.buttons }>
					<button className={ styles.attach } onClick={ props.onAudioStart } id="audio" style={{ display: props.audioStatus.micDisplay }}>
						<img className={ styles.attach_icon } src={ audio } alt="audio" />
					</button>
					<button className={ styles.attach } onClick={ props.onAudioStop } style={{ display: props.audioStatus.stopDisplay }}>
						<img className={ styles.attach_icon } src={ stop } alt="stop" />
					</button>
					<button className={ styles.attach } onClick={ props.onGeo }>
						<img className={ styles.attach_icon } src={ geo } alt="geo" />
					</button>
					<input 
						type="file" 
						id="fileElem"
						accept="image/*" 
						style={{display: "none"}}
						onChange={props.onChange}
					/>
					<label htmlFor="fileElem">
						<button className={ styles.attach } >
							<label htmlFor="fileElem">
								<img className={ styles.attach_icon } src={ attachment } alt="attach"/>
							</label>
						</button>
					</label>
					<button className={ styles.send } onClick={ props.onSend }>
						<img className={ styles.send_icon } src={ send } alt="send" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default InputForm;