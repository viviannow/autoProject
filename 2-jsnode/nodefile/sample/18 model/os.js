var os = require("os");

// CPU 的字节序
console.log('endianness ::::: ' + os.endianness());

// 操作系统名
console.log('type ::::: ' + os.type());

// 操作系统名
console.log('platform ::::: ' + os.platform());

// 系统内存总量
console.log('total memory ::::: ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory ::::: ' + os.freemem() + " bytes.");

console.log('操作系统的默认临时文件夹:::::'+os.tmpdir());
console.log('CPU 的字节序，可能的是 "BE" 或 "LE"。:::::'+os.endianness());
console.log('操作系统的主机名。:::::'+os.hostname());
console.log('操作系统名:::::'+os.type());
console.log('操作系统名:::::'+os.platform());
console.log('操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。:::::'+os.arch());
console.log('操作系统的发行版本。:::::'+os.release());
console.log('操作系统运行的时间，以秒为单位。:::::'+os.uptime());
console.log('一个包含 1、5、15 分钟平均负载的数组。:::::'+os.loadavg());
console.log('系统内存总量，单位为字节。	:::::'+os.totalmem());
console.log('操作系统空闲内存量，单位是字节:::::'+os.freemem());
console.log('一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。:::::'+os.cpus());
console.log('获得网络接口列表。:::::'+os.networkInterfaces());
