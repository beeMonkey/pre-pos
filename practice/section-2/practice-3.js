'use strict';

function countSameElements(collection) {
  // key-value
  var map = new Map();
  // 遍历集合中所有字符串
  for(var i=0;i<collection.length;i++){
    // 判断字符串长度， 如果等于1，直接做统计，否则做特殊处理统计
    if(collection[i].length == 1) {
      var ele = collection[i];
      // 判断是否已有存在的key
      if(!map.has(ele)) {
        map.set(ele, 0);
      }
      // 取出value加一
      map.set(ele,map.get(ele) + 1);
    } else {
      // 取字符串第一个字符作为key
      var ele = collection[i].substring(0,1);
      if(!map.has(ele)) {
        map.set(ele, 0);
      }
      // 取字符串中的数字并做类型转换
      var num= Number(collection[i].replace(/[^0-9]/ig,""));
      map.set(ele,map.get(ele) + nums);
    }
  }
  console.log(map)
}

// 失败代码，注意要用key-value
// var arr=[];
// var specialArr=[];
// for(var i=0;i< collection.length;){
//   var count =0;
//   for(var j=i;j < collection.length;j++){
//     if(collection[i]===collection[j]){
//       count++;
//     }
//     // if(collection[i].length!=1){
//     //   console.log(collection[i]);
//     // }
//     //console.log(collection[j].substring(0,1));
//     if( collection[i]==collection[j].substring(0,1) && collection[i] != collection[j] ){
//       var num =collection[j].substring(2,1);
//       console.log(collection[j].substring(0,1));
//       console.log(num);
//     }
//   }

//   // if(collection[i].indexOf('-')>=0||collection[i].indexOf(':')>=0||collection[i].indexOf('[')>=0){
//   //   specialArr.push(collection[i]);
//   // }
//   // if(collection[i].indexOf("-")>=0){
//   //   var tempArr=collection[i].split("-");
//   //   arr.push({
//   //     key:tempArr[0],
//   //     count:Number(tempArr[1])
//   //   });
//   //   break;
//   // }
//   arr.push({
//     name:collection[i],
//     summary:count
//   });
//   i+=count;
// }
// console.log(arr);
// //console.log(specialArr);
// return arr;
