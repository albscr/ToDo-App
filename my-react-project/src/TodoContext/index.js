import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      // El estado de nuestra búsqueda
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      // Cantidad de TODOs completados
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      // Cantidad total de TODOs
      const totalTodos = todos.length;
      // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
      let searchedTodos = [];
    
      // Lógica para filtrar
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
    
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
    return (
        <TodoContext.Provider value={{
            loading, 
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,   
            openModal,
            setOpenModal,     
            }}>
            {props.children}
        </TodoContext.Provider>
    )
}


// {/* <TodoContext.Consumer></TodoContext.Consumer> */}
export {TodoContext, TodoProvider};