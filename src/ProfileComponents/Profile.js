import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/profile.module.css';
import back from '../assets/back.svg';
import edit from '../assets/edit.svg';
import tick from '../assets/tick.svg';
import interlocutor from '../assets/user.svg';

const userId = 'UserId';

function Profile(props) {

	const [user, setUser] = useState(UserInit());

	function UserInit() {
		const changedUser = JSON.parse(localStorage.getItem(userId));
		if (changedUser !== null) {
			return {
				name : changedUser.name,
				username : changedUser.username,
				bio : changedUser.bio,
			};
		}
		return {
			name : '',
			username : '',
			bio : '',
		};
	}

	const name = React.createRef();
	const username = React.createRef();
	const bio = React.createRef();

	const editButton = <button className={ styles.edit } onClick={ ToggleEditMode }>
		<img className={ styles.edit_icon } src={ edit } alt="edit"/>
	</button>;
	const tickButton = <button className={ styles.tick } onClick={ ToggleViewMode }>
		<img className={ styles.tick_icon } src={ tick } alt="tick"/>
	</button>;

	const nameViewer = (value) => { return (<div className={styles.nameViewer}>
		{ value }
	</div>); };
	const usernameViewer = (value) => { return (<div className={styles.usernameViewer}>
		{ value }
	</div>); };
	const bioViewer = (value) => { return (<div className={styles.bioViewer}>
		{ value }
	</div>); };

	const usernameChanger = <input placeholder="Username" ref={ username }/>;
	const bioChanger = <input placeholder="Biography" ref={ bio }/>;
	const nameChanger = <input placeholder="Full Name" ref={ name }/>;

	const [editMode, setEditMode] = useState(Init());

	function Init() {
		return({
			edit: false, 
			headbutton: editButton,
			username: usernameViewer(user.username) ,
			name: nameViewer(user.name),
			bio: bioViewer(user.bio),
		});
	}

	function ToggleEditMode(){
		setEditMode({
			edit: true,
			headbutton: tickButton,
			username: usernameChanger,
			name: nameChanger,
			bio: bioChanger,
		});
	}

	function ToggleViewMode(){
		const tempUser = {
			name: name.current.value,
			username: username.current.value,
			bio: bio.current.value,
		};
		UserToLocal(tempUser);
		setUser(tempUser);
		setEditMode({
			edit: false, 
			headbutton: editButton,
			username: usernameViewer(tempUser.username),
			name: nameViewer(tempUser.name),
			bio: bioViewer(tempUser.bio),
		});
	}

	function UserToLocal(userObj) {
		localStorage.setItem(userId, JSON.stringify(userObj));
	}

	return (
		<div className={ styles.profile_manager}>
			<div className={ styles.top_line }>
				<Link to="/" className={ styles.back }>
					<img className={ styles.back_icon } src={ back } alt="back"/>
				</Link>
				{ editMode.headbutton }
			</div>
			<div className={ styles.profile_content }>
				<div className={ styles.photo }>
					<img className={ styles.photo_icon } src={ interlocutor } alt="profile_photo"/>
				</div>
				<div className={ styles.full_name }>
					{ editMode.name }
				</div>
				<div className={ styles.username }>
					{ editMode.username }
				</div>
				<div className={ styles.bio }>
					{ editMode.bio }
				</div>
			</div>
		</div>
	);
}

export default Profile;
