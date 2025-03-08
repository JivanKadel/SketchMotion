import Shape from './Shape';

class Circle extends Shape {
	constructor(x, y, diameter) {
		super(x, y);
		this.diameter = diameter;
	}

	draw(ctx, roughCanvas, sketchMode) {
		if (sketchMode) {
			roughCanvas.circle(this.x, this.y, this.diameter);
		} else {
			ctx.arc(this.x, this.y, this.diameter, 0, 2 * Math.PI);
		}
	}
}
export default Circle;
