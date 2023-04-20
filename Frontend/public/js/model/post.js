import { drawPosts } from "../view/feed.js";
/*
interface Post {
	user: RandomUser
	content: {
		title: string
		tags: string[]
		imageUrl: string
	}
}
*/

let posts = [];

export const getPosts = () => posts;

export const addPost = (post) => {
	posts.push(post);
	drawPosts(posts);
};

export const addPosts = (newPosts) => {
	posts = [...posts, ...newPosts];
	drawPosts(posts);
};
