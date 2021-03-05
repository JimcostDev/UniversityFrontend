import { Course } from "./course";
import { Instructor } from "./instructor";

export class CourseInstructor {
    constructor(
        public ID: number,
        public CourseID: number,
        public InstructorID: number,

        //relaciones (dependencias)
        public Course: Course,
        public Instructor: Instructor

        ) { }
}
