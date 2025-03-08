import Shape from './Shape';

class Ellipse extends Shape {
	constructor(x, y, width, height) {
		super(x, y);
		this.width = width;
		this.height = height;
	}

	draw(ctx, roughCanvas, sketchMode) {
		if (sketchMode) {
			roughCanvas.ellipse(this.x, this.y, this.width, this.height);
		} else {
			ctx.ellipse(
				this.x,
				this.y,
				this.width / 2,
				this.height / 2,
				0,
				0,
				Math.PI * 2
			);
		}
	}
}
export default Ellipse;
