    const createID = (ExistingID) => {
      if(ExistingID === undefined){
         return Math.floor(Math.random() * 10000);
      } else {
         return ExistingID;
      };  
    };

    export default createID;