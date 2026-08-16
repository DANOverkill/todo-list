// sets local storage 
const setLocalStorage = (allProjects) => {
    localStorage.setItem('userData', JSON.stringify(allProjects))
};


//retreaves local storage
const loadLocalStorage = (name) => {
    //temp logic
    console.log(localStorage.getItem(name))
};

//export
export {setLocalStorage, loadLocalStorage};