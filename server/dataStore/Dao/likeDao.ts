import{Like} from "../../types";
export interface LikeDao {
    createLike(like: Like): void;
    getLikeByUserIdAndPostId(userId: string, postId: string): Like|undefined;
    deleteLikeByUserIdAndPostId(userId: string, postId: string): void;
    getAllLikes(): Like[];
}