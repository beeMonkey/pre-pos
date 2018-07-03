'use strict';

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
