'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(var i=0;i < collectionA.length;i++ ){
    for(var j=0;j <objectB.value.length;j++){
        if(collectionA[i].key===objectB.value[j]){
          var step=parseInt(collectionA[i].count/3);
          //console.log(step);
          if(step){    
            collectionA[i].count=collectionA[i].count-(step*1);
          }
        }
    }
  }
  return collectionA;
}
