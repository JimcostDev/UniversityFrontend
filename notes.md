# CLI ANGULAR

-- previamente instalar node.js

-- npm install -g @angular/cli -> instalar cli angular

-- ng new nombre-proyecto -> crear proyecto de angular (debe estar en el workspace que deseemos trabajar)

-- ng serve | ng serve --port 4201 -> correr app

-- ng g component nombre-carpeta/nombre-archivo -> agregar un componente (controlador y vista)

-- ng g class  nombre-carpeta/nombre-archivo -> agregar una clase (modelo)

-- ng g service nombre-carpeta/nombre-archivo -> generar un servicio (capa logica)

## PASOS PARA CREAR CRUD

-- 1. crear el componente´para la entidad -> ng g component component/student-list

-- 2. en app.routing.module.ts registrar el componente; es decir importar -> import { StudentListComponent } from './component/student-list/student-list.component';)

-- 3. agregar el path correspondiente -> { path:'student-list', component: StudentListComponent }

-- 4. crear el modelo para la entidad -> ng g class  domain/Student

-- 5. definir las propiedades del modelo -> Student

-- 6. crear el servicio para la entidad -> ng g service service/Student 