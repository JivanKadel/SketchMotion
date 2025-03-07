import Shape from './Shape';
class Rectangle extends Shape {
	constructor(x, y, width, height) {
		super(x, y);
		this.width = width;
		this.height = height;
	}
	draw(ctx, roughCanvas, sketchMode) {
		if (sketchMode) {
			roughCanvas.rectangle(this.x, this.y, this.width, this.height);
		} else {
			ctx.strokeRect(this.x, this.y, this.width, this.height);
		}
	}
}
export default Rectangle;
