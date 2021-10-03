let Weapon = function(type){
  let keys = Object.keys(WEAPONS.templates[type]);
  keys.forEach(k=>{
    this[k] = WEAPONS.templates[type][k];
  })

  this.particles = [];
  this.draw = function(pos){
    this.particles.forEach(p=>p.draw());
  }
}

let WEAPONS = {
  templates: {
    "pistol" : {
      name: "pistol",
      cooldown: 10,
      numShots: 60,
      spriteSheet: 'weapons',
      shotSound:null,

      update: function(delta,room){
        this.particles.forEach(p => {
          p.update(delta,room);
          room.actors.forEach(a=>{
            if(game.collisions.circleCollision(p,a)){
              p.life = p.maxLife;
            }
          })
          room.enemies.forEach(e=>{
            if(game.collisions.circleCollision(e,p)){
              p.life = p.maxLife;
              //TODO Enemy takes damage
              
            }
          })
        });
        this.particles = this.particles.filter(p => !p.dead);
      },
      draw: function(pos){
        this.particles.forEach(p=>p.draw());
      },
      shoot: function(dir, player, room){
        console.log('Shooting Gun');
        this.particles.push(new Particle(
          {x:player.pos.x,y:player.pos.y},
          4,
          '#00F',
          'line',
          [dir]
        ))
      },
    },
    "shotgun" : {
      name: "shotgun",
      cooldown: 10,
      numShots: 60,
      spriteSheet: 'weapons',
      shotSound:null,
      update: function(delta){

      },
      draw: function(){

      },
      shoot: function(dir, player, room){
        //playSound
        //createParticles and load them into this.particles
        //The end?
      },

    },
    "wavegun" : {
      name: "wavegun",
      cooldown: 10,
      numShots: 60,
      spriteSheet: 'weapons',
      shotSound:null,
      update: function(delta){

      },
      draw: function(){

      },
      shoot: function(dir, player,room){

      },

    },
    "zapgun" : {
      name: "zapgun",
      cooldown: 10,
      numShots: 60,
      spriteSheet: 'weapons',
      shotSound:null,
      update: function(delta){

      },
      draw: function(){

      },
      shoot: function(dir, player,room){

      },

    },
    "axe" : {
      name: "axe",
      cooldown: 10,
      numShots: 60,
      spriteSheet: 'weapons',
      shotSound:null,
      update: function(delta){

      },
      draw: function(){

      },
      shoot: function(dir, player,room){

      },

    },
    "laserSword" : {
      name: "laserSword",
      cooldown: 10,
      numShots: 60,
      spriteSheet: 'weapons',
      shotSound:null,
      update: function(delta){

      },
      draw: function(){

      },
      shoot: function(dir, player,room){

      },

    },
    "minigun" : {
      name: "minigun",
      cooldown: 10,
      numShots: 60,
      spriteSheet: 'weapons',
      shotSound:null,
      update: function(delta){

      },
      draw: function(){

      },
      shoot: function(dir, player,room){

      },

    },
    "smg" : {
      name: "smg",
      cooldown: 10,
      numShots: 60,
      spriteSheet: 'weapons',
      shotSound:null,
      update: function(delta){

      },
      draw: function(){

      },
      shoot: function(dir, player,room){

      },

    },
    "beamgun" : {
      name: "beamgun",
      cooldown: 10,
      numShots: 60,
      spriteSheet: 'weapons',
      shotSound:null,
      update: function(delta){

      },
      draw: function(){

      },
      shoot: function(dir, player,room){

      },

    },
    "zapshotgun" : {
      name: "zapshotgun",
      cooldown: 10,
      numShots: 60,
      spriteSheet: 'weapons',
      shotSound:null,
      update: function(delta){

      },
      draw: function(){

      },
      shoot: function(dir, player,room){

      },

    },
    "bonegun" : {
      name: "bonegun",
      cooldown: 10,
      numShots: 60,
      spriteSheet: 'weapons',
      shotSound:null,
      update: function(delta){

      },
      draw: function(){

      },
      shoot: function(dir, player,room){

      },

    },
  },
  recipes: {},
  assignList: function(){
    arr = Object.keys(this.templates);
    let rng = new RNG(game.seed)
    //Shuffle Weapons List with the game seed
    arr = arr
      .map((value) => ({ value, sort: rng.rand() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    //Make a list of possible material combinations.
    console.log(arr);
    //e is essence, j is junk, c is crystals
    let mats = ['c','e','j'];
    let listOfRecipes = combinationsReplacement(mats,3);
    listOfRecipes.forEach(r=>{
      let str = '';
      while(r.length){
        str += r.shift();
      }
      //str becomes value of recipe
      let weapon = arr.pop();
      this.recipes[str] = weapon;
    })
  }
}
