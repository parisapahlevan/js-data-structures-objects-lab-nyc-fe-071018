// Write your solution in this file!

const driver = {
  name: 'Sam',
  address: '11 Broadway'
<<<<<<< HEAD
};

=======
}
>>>>>>> d851d599cd72ad073a7502bf0519c93ea1291b34
function updateDriverWithKeyAndValue(driver, key, value){
  const copy = Object.assign({}, driver, {[key]: value})
  return copy
 }
<<<<<<< HEAD

=======
 
 
>>>>>>> d851d599cd72ad073a7502bf0519c93ea1291b34
 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   driver[key] = value;
   return driver;
  }
  
 
  function deleteFromDriverByKey(driver, key, value){
    const copy = Object.assign({}, driver);
    delete copy.name;
    return copy
  }
  
  function destructivelyDeleteFromDriverByKey(driver, key, value){
<<<<<<< HEAD
    delete driver[key]
    return driver;
  }
    
=======
   // delete driver[key]
    return driver
  }
    
    
    
    
    
    
  }
>>>>>>> d851d599cd72ad073a7502bf0519c93ea1291b34
