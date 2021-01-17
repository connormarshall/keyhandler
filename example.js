import { KeyHandler } from './keyhandler.js';

const kh = new KeyHandler();

function test() {
	console.log("KeyHandler is working!");
}

kh.callWhenPressed('a', test);
