import React, { useState } from 'react';
import styles from '../styles/profile.module.css';
import back from '../assets/back.svg';
import edit from '../assets/edit.svg';
import tick from '../assets/tick.svg';
import user from '../assets/user.svg';
import { Link } from 'react-router-dom';


function Profile(props) {
	let name = 'Alexey';
	let username = 'leha';
	let bio = 'Jivu';

	const editButton = <button className={ styles.edit } onClick={ ToggleEditMode }>
												<img className={ styles.edit_icon } src={ edit } alt="edit"/>
											</button>;

	const tickButton = <button className={ styles.tick } onClick={ ToggleViewMode }>
												<img className={ styles.tick_icon } src={ tick } alt="tick"/>
											</button>;

	const nameViewer = <div>
												{ name }
											</div>

	const nameChanger = <form>
		
											</form>

	const usernameViewer = <div>
												{ username }
											</div>

	const usernameChanger = <form>
		
											</form>

	const bioViewer = <div>
												{ bio }
											</div>

	const bioChanger = <form>
		
											</form>

	const [editMode, setEditMode] = useState(Init());

	function Init() {
		return({
			edit: false, 
			headbutton: editButton,
			username: usernameViewer ,
			name: nameViewer,
			bio: bioViewer,
		}	
		);
	}

	function ToggleEditMode(){
		setEditMode({
			edit:	true,
			headbutton: tickButton,
			username: usernameChanger,
			name: nameChanger,
			bio: bioChanger,
		})
	}

	function ToggleViewMode(){
		setEditMode({
			edit: false, 
			headbutton: editButton,
			username: usernameViewer ,
			name: nameViewer,
			bio: bioViewer,
		})
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
					<img className={ styles.photo_icon } src={ user } alt="profile_photo"/>
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
