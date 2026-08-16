// sets local storage 
const setLocalStorage = (allProjects) => {
    localStorage.setItem('userData', JSON.stringify(allProjects))
};


//retreaves local storage
const loadLocalStorage = () => {
    return JSON.parse(localStorage.getItem('userData'))
};

//export
export {setLocalStorage, loadLocalStorage};