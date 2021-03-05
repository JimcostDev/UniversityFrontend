import { Course } from "./course";
import { Student } from "./student";

export class Enrollment {
    constructor(
        public EnrollmentID: number,
        public CourseID: number,
        public StudentID: number,
        public Grade: number,

        //relaciones (dependencias)
        public Course: Course,
        public Student: Student

        ) { }
}
