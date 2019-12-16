import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/chat.module.css';
import ConvHeader from './ConvHeader';
import InputForm from './InputForm';
import MessageForm from './MessageForm';

let img_url = '';
let audio_url = '';
let Mb = 1024*1024;

function ConvWindow(props) {
	const { chatId } = useParams();
	let lastMessageId = 0;
	let messageCount = 0;
	const mediaRecorder = React.useRef(null);
	const [inputValue, setInputValue] = useState('');
	const [messages, setMessages] = useState(InitChats());
	const [fileSent, setFileSent] = useState(InitFileSent());
	const [audioShown, setAudioShown] = useState(InitAudioShown());

	function InitAudioShown(){
		return ({
			micDisplay: "flex",
			stopDisplay: "none"
		})
	}
	function InitFileSent() {
		return ({
			display: "none"
		})
	}

	function handleFile(file) {
		img_url = window.URL.createObjectURL(file);
		if(img_url!== '') {
			setFileSent({display: "inline"});
			const data = new FormData();
			data.append('file', file);
			data.append('chat_id', chatId);
			if(file.size < 4*Mb) {
				fetch('https://tt-front.now.sh/upload', {
					method: 'POST',
					body: data,
				});
			} else {
				alert('File`s size must be less than 4 Mb');
			}
		}
	}

	function handleChange(event) {
		if(event.target.type === "file") {
			handleFile(event.target.files[0]);
			event.target.value = '';
		} else {
			setInputValue(event.target.value);
		}
	}

	function getMessageProps(messageObj) {
		const messageElemProps = {
			img_src: messageObj.img_src,
			audio_src: messageObj.audio_src,
			key: messageCount,
			id: messageCount,
			messageText: messageObj.messageText,
			messageTime: new Date(messageObj.messageTime).toTimeString().slice(0, 5),
			companionName: messageObj.companion,
		};
		return messageElemProps;
	}

	function InitChats(){
		const storageMessageArray = JSON.parse(localStorage.getItem(chatId));
		if (storageMessageArray !== null) {
			const messagesInitArray = [];
			for (; messageCount < storageMessageArray.length; messageCount += 1) {
				const messageElemProps = getMessageProps(storageMessageArray[messageCount]);
				messagesInitArray.push(
					<MessageForm
						img_src={messageElemProps.img_src}
						audio_src= {messageElemProps.audio_src}
						key={messageElemProps.key}
						id={messageElemProps.id}
						messageText={messageElemProps.messageText}
						messageTime={messageElemProps.messageTime}
						companionName={messageElemProps.companionName}
					/>,
				);
				if (messageCount === storageMessageArray.length - 1){
					lastMessageId = messageCount;
				}
			}
			setTimeout(() => {
				document.getElementById(lastMessageId).scrollIntoView();
			}, 0);
			return messagesInitArray;
		}
		return [];
	}

	function handleCreateMessage(){
		if (inputValue!=='' || img_url!=='' || audio_url!=='') {
			const messageObj = {
				img_src: img_url,
				audio_src: audio_url,
				key: messageCount,
				companion: props.companionName,
				messageText: inputValue,
				messageTime: new Date(),
			};
			addMessage(messageObj);
			messageToLocal(messageObj);
			messageCount += 1;
			setInputValue('');
			setFileSent({display: "none"});
			img_url = '';
			audio_url = '';
			window.URL.revokeObjectURL(img_url);
		}
	}

	function addMessage(messageObj){
		const messageElemProps = getMessageProps(messageObj);
		setMessages(
			messages.concat(
				<MessageForm
					img_src={messageElemProps.img_src}
					audio_src= {messageElemProps.audio_src}
					key={messageElemProps.key}
					id={messageElemProps.id}
					messageText={messageElemProps.messageText}
					messageTime={messageElemProps.messageTime}
					companionName={messageElemProps.companionName}
				/>,
			),
		);
	}

	function messageToLocal(messageObj) {
		let storageMessageArray = JSON.parse(localStorage.getItem(chatId));
		if (storageMessageArray === null) {
			storageMessageArray = [];
		}
		storageMessageArray.push(messageObj);
		localStorage.setItem(+chatId, JSON.stringify(storageMessageArray));
	}

	function handleKeyPress(event) {
		if(event.key === 'Enter') {
			handleCreateMessage();
		}
	}

	function handleGeo(event) {
		if("geolocation" in navigator){
			navigator.geolocation.getCurrentPosition((position) => {
				setInputValue(`https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`);
			});
		} else {
			alert('Geolocation is not available in your browser');
		}
	}

	const preventAndStop = (event) => {
		event.stopPropagation();
		event.preventDefault();
	};

	const drop = (event) => {
		preventAndStop(event);
		const file = event.dataTransfer.files[0];
		handleFile(file);
		event.target.style.backgroundColor = "";
	}

	async function getMedia() {
		try {
			const constraints = { audio: true };
			const stream = await navigator.mediaDevices.getUserMedia(constraints);
			mediaRecorder.current = new MediaRecorder(stream);
			mediaRecorder.current.start();
		} catch(err) {
			alert("Failed to get audio");
		}
	}

	function handleRecordingStart(event){
		setAudioShown({
			micDisplay: "none",
			stopDisplay: "flex"
		});
		getMedia();
	}

	function handleRecordingStop(event){
		setAudioShown({
			micDisplay: "flex",
			stopDisplay: "none"
		});
		mediaRecorder.current.stop();
		let chunks = [];
		mediaRecorder.current.addEventListener('stop', (event) => {
			const blob = new Blob(chunks, { type: mediaRecorder.mimeType });
			chunks = [];
			audio_url = URL.createObjectURL(blob);
			handleCreateMessage();
		});
		mediaRecorder.current.addEventListener('dataavailable', (event) => {
			chunks.push(event.data);
		});
	}
	return (
		<div className={styles.conv_window} onKeyPress={ handleKeyPress }>
			<ConvHeader />
			<div className={ styles.message_container }>
				{ messages }
			</div>
			<span style={{
				display: fileSent.display,
				position: "fixed",
				top: "calc(100% - 49px)",
				left: "calc(100% - 106px)",
				height: "5px",
				width: "5px",
				backgroundColor: "rgb(24, 58, 55)",
				borderRadius: "100%"
				}}/>
			<InputForm audioStatus={ audioShown } onAudioStart={handleRecordingStart} onAudioStop={handleRecordingStop} onDragOver={ preventAndStop } onDrop={ drop }  onChange={ handleChange } value={ inputValue } onSend={ handleCreateMessage } onGeo={ handleGeo }/>
		</div>
	);
}

export default ConvWindow;
