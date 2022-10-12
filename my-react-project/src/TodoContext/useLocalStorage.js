import React from "react";

//HOOKS:
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    
    // Estado inicial de nuestros TODOs
    const [item, setItem] = React.useState(initialValue);
  
  
    React.useEffect(() => {
      setTimeout(() => {
        //try nos ayuda a ejercutar el codigo y si hay un error no crashea el codigo sino que si reacciona
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            localStorage.setItem('itemName', JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch(error){
          setError(error);
        }
        
      }, 1000)
    });
  
    const saveItem = (newItem) => {
     try {
       //logica para guardar los nuevos todos en el local storage
       const stringifiedItem = JSON.stringify(newItem);
       localStorage.setItem(itemName, stringifiedItem);
       setItem(newItem);
     }
     catch(error){
      setError(error);
     }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

  export {useLocalStorage};