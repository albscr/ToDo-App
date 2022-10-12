import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { Greetings, HourTime } from '../HourTime';
import { TodosLoading } from '../TodosLoading';


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <div className='container-top'>
        <HourTime />
        <Greetings />
      </div>
      <div className='container-items'>
        <TodoCounter />
        <TodoSearch />


        <TodoList>
          {error && <p>Desesperate</p>}
          {loading && <TodosLoading />}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

        <CreateTodoButtom
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </div>
    </React.Fragment>
  );
}

export { AppUI };