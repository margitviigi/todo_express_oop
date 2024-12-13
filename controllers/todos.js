import { Todo } from "../models/todo.js"
class todoController {
    constructor() {
        this.TODOS = [] 
    } 
    createTodo(req, res) {
        const task = req.body.task
        const newTodo = new Todo (Math.random().toString(), task)
        this.TODOS.push(newTodo)
        res.json({
            message: 'Created new todo object.',
            newTask: newTodo
        } )
    } 
    getTodos(req, res){
        res.json ({tasks: this.TODOS})
    } 

    updateTodo(req, res){
        try{
        const todoId = req.params.id 
        const updatedTask = req.body.task

        const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId)

        if(todoIndex < 0){
            res.json({
                message: 'Could not find todo with such index.'
            } )
            throw new Error('Could not find todo')
        } 
        this.TODOS[todoIndex] = new Todo (this.TODOS[todoIndex].id, updatedTask)
        res.json({
            message: 'todo is updated',
            updatedTask: this.TODOS[todoIndex] 
      
        })
  } catch (error){
    console.log(error.message)
  } 
    } 
    deleteTodo(req, res){
        try{
        const todoId = req.params.id 
        const updatedTask = req.body.task

        const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId)

        if(todoIndex < 0){
            res.json({
                message: 'Could not find todo with such index.'
            } )
            throw new Error('Could not find todo')
        } 
        this.TODOS.splice(todoIndex, 1)
        res.json({
            message: 'todo is deleted',
      
        })
  } catch (error){
    console.log(error.message)
  } 
    } 
} 
export const TodoController = new todoController()