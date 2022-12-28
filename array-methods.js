Array.prototype.myMap = function (callback) {
    ar=[],c=0
   for( i of this){
     ar.push(callback(i,c,this))
     c++
   }
     return ar
 };
 
 Array.prototype.myFilter = function (callback) {
    ar=[],c=0
   for( i of this){
     if(callback(i,c,this)===true){
       ar.push(i)
     }
     c++
   }
   return ar
 };
 
 Array.prototype.myReduce = function (callback, initialValue) {
    a=initialValue!=null?initialValue:this[0],c=0;
   for( i of this){
     if(initialValue==null&&c===0){
       c++
     }else{
       a=callback(a,i,c,this)
       c++
     }
   }
   return a
 };
 