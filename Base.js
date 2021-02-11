class Base
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true		
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			var basePos=this.body.position;		
			push()
			translate(basePos.x, basePos.y);
			fill("brown")
			rectMode(CENTER)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}