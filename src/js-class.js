class Star {  
    constructor(name) {
      this.name = name;
    }
    getMessage(message) {
      return this.name + message;
    }
  }
  var sun = new Star('Sun');  
  var msg = sun.getMessage('is shining') // => 'Sun is shining'
  console.log(msg);