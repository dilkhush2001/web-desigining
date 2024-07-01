import { UserSubscribedCourse } from "./UserSubscribedCourse";

export interface UserSubscribedBatch{
    batch_id:string,
    demoClassURL:string,
    demoClassTime:string,
    batchStartDate:string,
    batchEndDate:string,
    assignedCourses:UserSubscribedCourse[]
}