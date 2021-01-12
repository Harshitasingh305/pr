class Divisions{
constructor(x,y){
var options={
isStatic:true,
restitution:0.7,
density:1.0,
friction:1.0
}
this.width=10;
this.height=200;
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)


}
display(){
	 var pos =this.body.position;
     
      
       push()
       rectMode(CENTER);
       fill("white");
      
       translate(pos.x,pos.y)
       rect(0, 0,this.width,this.height);
       pop()
	

}



}