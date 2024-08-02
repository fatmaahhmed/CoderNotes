import { Comment, Like, Post, User } from '../../types';

import { DataStore } from '../Dao/index';

export class InMemoryDatabase implements DataStore {
    private comments: Comment[] = [];
    private likes: Like[] = [];
    private posts: Post[] = [];
    private users: User[] = [];

    createComment(comment: Comment): void {
        this.comments.push(comment);
    }

    getCommentById(id: string): Comment | undefined {
        return this.comments.find(comment => comment.id === id);
    }

    deleteCommentById(id: string): void {
        this.comments = this.comments.filter(comment => comment.id !== id);
    }

    updateComment(id: string, comment: Comment): void {
        const index = this.comments.findIndex(c => c.id === id);
        if (index !== -1) {
            this.comments[index] = comment;
        }
    }

    getAllComments(): Comment[] {
        return this.comments;
    }

    createLike(like: Like): void {
        this.likes.push(like);
    }

    getLikeByUserIdAndPostId(userId: string, postId: string): Like | undefined {
        return this.likes.find(like => like.userId === userId && like.postId === postId);
    }

    deleteLikeByUserIdAndPostId(userId: string, postId: string): void {
        this.likes = this.likes.filter(like => like.userId !== userId || like.postId !== postId);
    }

    getAllLikes(): Like[] {
        return this.likes;
    }

    createPost(post: Post): void {
        this.posts.push(post);
    }

    getPostById(id: string): Post | undefined {
        return this.posts.find(post => post.id === id);
    }

    deletePostById(id: string): void {
        this.posts = this.posts.filter(post => post.id !== id);
    }

    updatePost(post: Post): void {
        const index = this.posts.findIndex(p => p.id === post.id);
        if (index !== -1) {
            this.posts[index] = post;
        }
    }

    getAllPosts(): Post[] {
        return this.posts;
    }

    createuser(user: User): void {
        this.users.push(user);
    }

    getuserbyid(id: string): User | undefined {
        return this.users.find(user => user.id === id);
    }

    getuserbyname(name: string): User | undefined {
        return this.users.find(user => user.firstName === name);
    }

    getuserbyemail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }

    updateuser(id: string,updatedUser: User): void {
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            this.users[index] = updatedUser;
        }
    }

    deleteuser(id: string): void {
        this.users = this.users.filter(user => user.id !== id);
    }

    getAllUsers(): User[] {
        return this.users;
    }
}
