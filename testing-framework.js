function describe(testSuiteName, func) {
    console.log(`beginning test suite ${testSuiteName}`)
    try{
      func()
      console.log(`successfully completed test suite ${testSuiteName}`)
    }catch(e){
      console.error(`failed running test suite ${testSuiteName} ${e.message}`)
    }
  }
  
  function it(testCaseName, func) {
    console.log(`beginning test case ${testCaseName}`)
    try{
      func()
      console.log(`successfully completed test case ${testCaseName}`)
      
    }catch(error){
      throw new Error(`on test case ${testCaseName} with error message ${error.message}`)
    }
  }
  
  function expect(actual) {
    return {
      toExist(){
        if(actual!=null){
          return true 
        }else{
          throw new Error(`expected value to exist but got ${JSON.stringify(actual)}`)
        }
      },
      toBe(expected){
        if(actual===expected){
          return true 
        } else {
          throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`)
        }
      },
      toBeType(type){
        if(typeof actual===type){
          return true 
        } else {
          throw new Error(`expected ${JSON.stringify(actual)} to be of type ${type} but got ${typeof actual}`)
        }
      }
    }
  }
  
  // Do not edit the lines below.
  exports.describe = describe;
  exports.it = it;
  exports.expect = expect;
  