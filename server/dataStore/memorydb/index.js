"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDatabase = void 0;
class InMemoryDatabase {
    constructor() {
        this.comments = [];
        this.likes = [];
        this.posts = [];
        this.users = [];
    }
    createComment(comment) {
        this.comments.push(comment);
    }
    getCommentById(id) {
        return this.comments.find(comment => comment.id === id);
    }
    deleteCommentById(id) {
        this.comments = this.comments.filter(comment => comment.id !== id);
    }
    updateComment(id, comment) {
        const index = this.comments.findIndex(c => c.id === id);
        if (index !== -1) {
            this.comments[index] = comment;
        }
    }
    getAllComments() {
        return this.comments;
    }
    createLike(like) {
        this.likes.push(like);
    }
    getLikeByUserIdAndPostId(userId, postId) {
        return this.likes.find(like => like.userId === userId && like.postId === postId);
    }
    deleteLikeByUserIdAndPostId(userId, postId) {
        this.likes = this.likes.filter(like => like.userId !== userId || like.postId !== postId);
    }
    getAllLikes() {
        return this.likes;
    }
    createPost(post) {
        this.posts.push(post);
    }
    getPostById(id) {
        return this.posts.find(post => post.id === id);
    }
    deletePostById(id) {
        this.posts = this.posts.filter(post => post.id !== id);
    }
    updatePost(post) {
        const index = this.posts.findIndex(p => p.id === post.id);
        if (index !== -1) {
            this.posts[index] = post;
        }
    }
    getAllPosts() {
        return this.posts;
    }
    createuser(user) {
        this.users.push(user);
    }
    getuserbyid(id) {
        return this.users.find(user => user.id === id);
    }
    getuserbyname(name) {
        return this.users.find(user => user.firstName === name);
    }
    getuserbyemail(email) {
        return this.users.find(user => user.email === email);
    }
    updateuser(user) {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
        }
    }
    deleteuser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
    getAllUsers() {
        return this.users;
    }
}
exports.InMemoryDatabase = InMemoryDatabase;
