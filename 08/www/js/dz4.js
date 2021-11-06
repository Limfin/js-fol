//#4 Как решить проблему?
//'use strict'
// if(2 > 1) {
// 	function showMessage5() {
// 		console.log('Message5');
// 	}
// }
// showMessage5(); //Error: showMessage5 is not defined
'use strict'
//первое решение
let showMessage6;
if (2 > 1) {
	showMessage6 = function () {
		console.log('Message6');
	};
}
showMessage6();

//второе решение
let showMessage5 = function () {
	console.log('Message5');
};
if (2 > 1) {
	showMessage5();
}

