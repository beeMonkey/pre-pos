'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var c=countSameElements(collectionA);
  var arr=practice2(c,objectB);
  return arr;
}

function countSameElements(collection) {
  var arr=[];
  for(var i=0;i< collection.length;){
    var count =0;
    for(var j=i;j < collection.length;j++){
      if(collection[i]===collection[j]){
        count++;
      }
    }
    //if(collection[i]==='d-5'){
      if(collection[i].indexOf("-")>=0){
      var tempArr=collection[i].split("-");
      arr.push({
        key:tempArr[0],
        count:Number(tempArr[1])
      });
      break;

    }
    arr.push({
      key:collection[i],
      count:count
    });
    i+=count;
  }
  console.log(arr);
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