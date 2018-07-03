'use strict';

function countSameElements(collection) {
  var arr=[];
  var specialArr=[];
  for(var i=0;i< collection.length;){
    var count =0;
    for(var j=i;j < collection.length;j++){
      if(collection[i]===collection[j]){
        count++;
      }
      // if(collection[i].length!=1){
      //   console.log(collection[i]);
      // }
      //console.log(collection[j].substring(0,1));
      if( collection[i]==collection[j].substring(0,1) && collection[i] != collection[j] ){
        var num =collection[j].substring(2,1);
        console.log(collection[j].substring(0,1));
        console.log(num);
      }
    }

    // if(collection[i].indexOf('-')>=0||collection[i].indexOf(':')>=0||collection[i].indexOf('[')>=0){
    //   specialArr.push(collection[i]);
    // }
    // if(collection[i].indexOf("-")>=0){
    //   var tempArr=collection[i].split("-");
    //   arr.push({
    //     key:tempArr[0],
    //     count:Number(tempArr[1])
    //   });
    //   break;
    // }
    arr.push({
      name:collection[i],
      summary:count
    });
    i+=count;
  }
  console.log(arr);
  //console.log(specialArr);
  return arr;
}
