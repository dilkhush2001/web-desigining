
export interface UpcomingBatch {
  batchId: string
  description: string
  demoClassURL: string
  demoClassTime: string
  batchStartDate: string
  batchEndDate: string
  assignedCourses: AssignedCourse[]
  courses: Course[]
  duration: number
}

export interface AssignedCourse {
  courseId: string
  startDate: string
  courseName: CourseName
}

export interface CourseName {
  courseName: string
}

export interface Course {
  courseName: string
}
