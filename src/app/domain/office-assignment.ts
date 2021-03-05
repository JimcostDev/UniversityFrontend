import { Instructor } from "./instructor";

export class OfficeAssignment {
    constructor(
        public InstructorID: number,
        public Location: string,

        //relaciones (dependencias)
        public Instructor: Instructor
        ) { }
}
