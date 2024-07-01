export interface UserClasses{
    classes:UserClass[],
}
export interface UserClass{
    courseName:string,
    courseClasses:ClassDetails[],
}
export interface ClassDetails{
    className:string,
    classVideo:string,
    classCheckList:classCheckList[],
}
export interface classCheckList{
    checkListName?:string,
    checkListTime?:string,
}