'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var prearr=[];
  for(var i=0;i< collectionA.length;){
    var count =0;
    for(var j=i;j < collectionA.length;j++){
      if(collectionA[i]===collectionA[j]){
        count++;
      }
    }
    prearr.push({
      key:collectionA[i],
      count:count
    });
    i+=count;
  }
  console.log(prearr);
  var arr=practice2(prearr,objectB);
  return arr;
}

function practice2(collectionA, objectB) {
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