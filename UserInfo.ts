import { UserSubscribedBatch } from "./UserSubscribedBatch";
import { UserSubscribedCourse } from "./UserSubscribedCourse";

export interface UserAllInfo{
    id:string,
    name:string,
    email:string,
    role:string|null,
    authUsername:string,
    authenticatedBy:string,
    mobilenumber:string,
    subscribedBatches:UserSubscribedBatch[],
    subscribedCourses:UserSubscribedCourse[]
}