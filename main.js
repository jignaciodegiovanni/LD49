let game = {
  width: 800,
  height: 640,
  artist: null,
  sceneManager: null,
  scene: null,
  player: null,
  actors: [],
  mouse: null,
  controller: null,
  delta: 0,
  timestamp: 0,

  setup: function(){
    this.artist = new Artist(this.width,this.height);
    this.artist.drawRect(0,0,this.width,this.height,'#aaa');
    this.mouse = new MouseController();
    this.controller = new Controller();
    this.player = new Player();

    for(let i = 0; i < 2; i++){
      this.actors.push(new Actor(
          {x: randInt(this.width), y: randInt(this.height)},
          {width:25,height:25},
          null,
          '#F00'
        )
      );

    }

    this.load();
  },

  load: function(){
    window.requestAnimationFrame(this.update.bind(this));
  },

  update: function(tstamp){
    this.delta = tstamp - this.timestamp;
    this.timestamp = tstamp;
    this.actors.forEach(actor=>actor.update(this.delta));
    this.player.update(this.delta);
    this.draw();
  },

  draw: function(){
    this.artist.drawRect(0,0,this.width,this.height,'#aaa');
    this.artist.drawLine(10,10,100,100,"#FFF");

    this.artist.writeText(this.delta,20,20,20,'red');

    this.artist.drawCircle(game.mouse.pos.x,game.mouse.pos.y, 30, this.artist.randColor());

    this.player.draw();

    this.actors.forEach(actor=>{
      actor.angle += Math.PI/100;
      actor.draw();
    });

    window.requestAnimationFrame(this.update.bind(this));
  }
}

game.setup();

function randInt(range){
  return Math.floor(Math.random() * range);
}

function distance(p1,p2){
  return Math.hypot(p1.x - p2.x,p1.y - p2.y);
}

document.oncontextmenu =new Function("return false;")
document.onselectstart =new Function("return false;")
