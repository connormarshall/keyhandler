export class KeyHandler {

  /* Properties:
   * keys - boolean array holding whether or not the key is pressed
   * continuous - boolean array holding whether or not macros should be executed continuously
   * macros - array of functions holding macros for keypresses
   */

  constructor() {

    this.keys = [];
    this.continuous = [];
    this.macros = [];

    //Key down event
    document.addEventListener("keydown", (e) => {
      let code = event.which || event.keyCode

      //If the key has been pressed already and continuous is true
      if (this.keys[code] && this.continuous[code]) {

        //Execute callback
        if(typeof this.macros[code] !== "undefined")
        	this.macros[code]();

        //If the key has not already been pressed (prevents spamming)
      } else if (!this.keys[code]) {
        this.keys[code] = true;

        //Execute callback
        if(typeof this.macros[code] !== "undefined")
        	this.macros[code]();

      }

    });

    //Key up event
    document.addEventListener("keyup", (e) => {
      let code = event.which || event.keyCode;
      this.keys[code] = false;

    });

  }

  //Gets the keycode of a string or char
  codeOf(key) {
    return key.toUpperCase().charCodeAt();
  }

  //returns the 'pressed' status of a key
  keyIsDown(key) {
    let code = this.codeOf(key);
    return this.keys[code];
  }

  //Assigns a function as a macro for this keypress
 	callWhenPressed(key, func) {
    //If the key is currently pressed, set callback
    this.macros[this.codeOf(key)] = func;

  }

  //Sets a key to call it's macro repeatedly while key is down
  continuousCallback(key, isContinuous) {
    this.continuous[this.codeOf(key)] = isContinuous;
  }

}
