const todoEditUpdates = (objA, objB) => {
    const updates = {};
    Object.keys(objB).forEach(key => {
        if (objA[key] !== objB[key]) {
            updates[key] = objB[key];
        }
    });
    console.log(updates);
    return updates;
};

export default todoEditUpdates;