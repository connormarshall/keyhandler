import { KeyHandler } from './keyhandler.js';

const kh = new KeyHandler();

//Macro
function test(a, b) {
	console.log(a + b);
}

//Assigns test to the A key, with an arbitrary amount of arguments
kh.callWhenPressed('a', test, "hello", " world!");

//Done! run this code, press the A key and check your console.
