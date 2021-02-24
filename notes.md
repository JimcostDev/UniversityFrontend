# CLI ANGULAR

-- previamente instalar node.js

-- npm install -g @angular/cli -> instalar cli angular

-- ng new nombre-proyecto -> crear proyecto de angular (debe estar en el workspace que deseemos trabajar)

-- ng serve | ng serve --port 4201 -> correr app

-- ng g component nombre-carpeta/nombre-archivo -> agregar un componente (controlador y vista)

-- ng g class  nombre-carpeta/nombre-archivo -> agregar una clase (modelo)

-- ng g service nombre-carpeta/nombre-archivo -> generar un servicio (capa logica)

## LISTAR

-- 1. crear el componente´para la entidad -> ng g component component/course-list

-- 2. agregar el path correspondiente en app.routing.module.ts -> { path:'course-list', component: CourseListComponent }

-- 3. crear el modelo para la entidad -> ng g class  domain/Course

-- 4. definir las propiedades del modelo -> Course

-- 5. crear el servicio para la entidad -> ng g service service/Course 

## EDITAR

-- 1. crear el metodo put en el service 

-- 2. generar el componente -> ng g component component/course-edit

-- 3. agregar el path correspondiente en app.routing.module.ts -> { path:'course-edit', component: CourseEditComponent }

-- 4. editamos el edit.component.ts 

-- 5. agregar al import Router la propiedad ActivatedRoute

-- 6. crear metodo getById en edit.component.ts 

-- 7. en ngOnInit() agregar el metodo getById

-- 8. crear el formulario en edit.component.html

-- 9. crear metodo edit() en edit.component.ts 