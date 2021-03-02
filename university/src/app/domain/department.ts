export class Department {
    constructor(
        public DepartmentID: number,
        public Name: string,
        public Budget: Float32List,
        public StartDate: Date,

        //relaciones (dependencias)
        // public Instructor: Instructor
        ) { }
}
