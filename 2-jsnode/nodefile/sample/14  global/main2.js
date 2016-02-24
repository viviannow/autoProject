console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
if(counter<122200){
	counter++;
}else{
	console.log("计数: %d", counter);
}

console.timeEnd('获取数据');

console.info("程序执行完毕。");