let Controller = function(){
  this.up = false;
  this.down = false;
  this.left = false;
  this.right = false;
  this.action1 = false;
  this.action2 = false;
  this.pause = false;
  //adding client test

  window.addEventListener('keydown', function(e){
    switch(e.code){
      case "KeyW":
        this.up = true;
        break;
      case "KeyA":
        this.left = true;
        break;
      case "KeyS":
        this.down = true;
        break;
      case "KeyD":
        this.right = true;
        break;
      case "Space":
        this.action1 = true;
        break;
      case "Ctrl":
        break;
      case "KeyP":
        this.pause = true;
        break;
    }
  }.bind(this))

  window.addEventListener('keyup', function(e){
    switch(e.code){
      case "KeyW":
        this.up = false;
        break;
      case "KeyA":
        this.left = false;
        break;
      case "KeyS":
        this.down = false;
        break;
      case "KeyD":
        this.right = false;
        break;
      case "Space":
        this.action1 = false;
        break;
      case "Ctrl":
        break;
      case "KeyP":
        this.pause = false;
        break;
    }
  }.bind(this))
}
