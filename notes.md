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

-- 4. definir las propiedades del modelo (guiarnos por la API) -> Course

-- 5. crear el servicio para la entidad -> ng g service service/Course 

-- 6. en course.service realizar la importacion de: import { HttpClient } from '@angular/common/http'; y import { Observable } from 'rxjs';
								  
-- 7. en course.service crear la propiedad url y definir dicha url en el constructor para consumir la api

-- 8. en course.service crear metodo getAll()

-- 9. en app.module.ts realizar la importacion de: import { HttpClientModule } from '@angular/common/http';

-- 10. en app.module.ts en la propiedad imports: agregar el nombre HttpClientModule

-- 11. en app.module.ts en en la propiedad imports: agregar el CourseService

-- 12. en list.component.ts pasar como parametro del constructor el CourseService y crear el metodo getAll()

-- 13. en el metodo ngOnInit() llamamos el metodo getAll()

-- 14. para trabajar con el patron observador/observable importar: import { Subscription } from 'rxjs';

-- 15. crear el metodo ngOnDestroy()

-- 16. crear la vista en list.component.html

## EDITAR

-- 1. crear el metodo put en el service 

-- 2. generar el componente -> ng g component component/course-edit

-- 3. agregar el path correspondiente en app.routing.module.ts -> { path:'course-edit', component: CourseEditComponent }

-- 4. editamos el edit.component.ts 

-- 5. agregar al import Router la propiedad ActivatedRoute

-- 6. crear metodo getById en edit.component.ts 

-- 7. en ngOnInit() agregar el metodo getById()

-- 8. crear el formulario en edit.component.html

-- 9. crear metodo edit() en edit.component.ts 