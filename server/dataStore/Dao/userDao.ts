import {User} from  "../../types";
;
  export interface UserDao {
    createuser(username:User):void;
    getuserbyid(id: string): User|undefined;
    getuserbyname(name: string): User|undefined;
    getuserbyemail(email: string): User|undefined;
    updateuser(id: string,updatedUser: User):void;
    deleteuser(id: string):void;
    getAllUsers(): User[];
  }

