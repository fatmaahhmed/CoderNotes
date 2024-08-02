import { CommentDao } from "./commentDao";
import {InMemoryDatabase} from "../memorydb/index";
import { LikeDao } from "./likeDao";
import { PostDao } from "./postDao";
import { UserDao } from "./userDao";
export interface DataStore extends CommentDao ,LikeDao ,PostDao,UserDao{
}
export const dataStore: DataStore = new InMemoryDatabase();
