export class Department {
    constructor(
        public DepartmentID: number,
        public Name: string,
        public Budget: number,
        public StartDate: Date,

        //relaciones (dependencias)
        // public Instructor: Instructor
        ) { }
}
