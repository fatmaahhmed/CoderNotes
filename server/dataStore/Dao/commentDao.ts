import{Comment}   from "../../types";
export interface CommentDao{
    createComment(comment: Comment): void;
    getCommentById(id: string): Comment|undefined;
    deleteCommentById(id: string): void;
    updateComment(id: string,comment: Comment): void;
    getAllComments(): Comment[];
   
}