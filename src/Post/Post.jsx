import React from 'react';
import './Post.css';
// title, body, author, img

const Post = props => {
	return (
		<div className='post-container'>
			<h1 className='heading'>{props.post.title}</h1>
			<img className='image' src={props.post.img} alt='post' />
			<p>{props.post.body}</p>
			<div className='info'>
				<h5>Article Number : {props.i}</h5>
				<h5>Author : {props.post.author}</h5>
			</div>
		</div>
	);
};

export default Post;
