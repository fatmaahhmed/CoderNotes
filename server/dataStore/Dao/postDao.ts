import { Post } from "../../types";
export interface PostDao{
    createPost(post: Post): void;
    getPostById(id: string): Post|undefined;
    deletePostById(id: string): void;
    updatePost(post: Post): void;
    getAllPosts(): Post[];
}
