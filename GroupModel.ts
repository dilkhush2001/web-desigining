import { UserClass } from "./UserClass";

export interface GroupData{
    groupId:string, 
    startDate: string,
    endDate: string,
    courses:string[],
    classes:UserClass[],
}