class Paper{
	constructor(x,y,r){
		var Paperoptions= {
			restitution:0.3,friction:0.4, density:0.1


		}
		this.r=r
		this.body= Bodies.circle(x,y,this.r,Paperoptions)
		World.add(world,this.body)
	}


	display(){
		var paperpos=this.body.position
		push()
		translate(paperpos.x,paperpos.y)
		rotate(this.body.angle)
		ellipseMode(RADIUS)
		ellipse(0,0,this.r)
		pop()
	}
}