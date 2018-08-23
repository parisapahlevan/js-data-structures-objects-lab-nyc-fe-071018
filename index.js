// Write your solution in this file!

const driver = {
  name: 'Sam',
  address: '11 Broadway'
};

function updateDriverWithKeyAndValue(driver, key, value){
  const copy = Object.assign({}, driver, {[key]: value})
  return copy
 }

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
    delete driver[key]
    return driver;
  }
    