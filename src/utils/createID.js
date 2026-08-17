    const createID = (existingID) => {
      if(existingID === undefined){
         return Math.floor(Math.random() * 10000);
      } else {
         return existingID;
      };  
    };

    export default createID;