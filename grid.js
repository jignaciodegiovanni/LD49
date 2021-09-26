let Grid = function(){
  this.grid = [];
  this.x = 0;
  this.y = 0;

  // Sets up the grid with the x, y provided by the Object. Gets no parameters
  this.setup = function(){
    for(let i = 0; i < this.x; i++){
      this.grid[i] = [];
      for(let j = 0; j < this.y; j++){
        this.grid[i][j] = false;
      }
    }
  }

  // Returns True if position is unused, False if it's used
  // Puts true values on grid. TODO: (should probably be done in getPos)
  this.checkPos = function(pos){
    if(this.grid[pos.x][pos.y] == false){
      this.grid[pos.x][pos.y] = true;
      return true;
    }
    return false;
    }



  // Gets an unused position on the grid based on the object size
  // Maybe should be done on Room?
    this.getPos = function(size, gen){
      let x = gen.randInt(size.x / game.gridDiv);
      let y = gen.randInt(size.y / game.gridDiv);
      while(this.checkPos({x: x, y: y}) == false){
        x = gen.randInt(size.x / game.gridDiv);
        y = gen.randInt(size.y / game.gridDiv);
      }
      x *= game.gridDiv;
      x += game.gridDiv / 2;
      y *= game.gridDiv;
      y += game.gridDiv / 2;
      return {x: x, y: y};
    }

}