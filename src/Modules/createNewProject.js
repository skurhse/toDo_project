import { projectsArray } from './storager';
import { projectInputField } from './Dom';

 class Project{
    constructor(name){
        this.name = name;
        this.todos = [];
    }
    getName(){
        return this.name;
    }
    getTodos(){
        return this.todos;
    }
    addTodos(todos){
    this.todos.push(todos);

    }
    removeTodos(datalist){
    this.todos.splice(datalist,1);
    }
}
const addNewProject = () => {
    const newProject = new Project(projectInputField.value);
        projectArray.push(newProject);
};
  
export { Project, addNewProject };