export class Department {
    constructor(
        public DepartmentID: number,
        public Name: string,
        public Budget: number,
        public StartDate: Date,
        public InstructorID: number

        //relaciones (dependencias)
        // public Instructor: Instructor
        ) { }
}
