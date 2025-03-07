class Shape {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	// eslint-disable-next-line no-unused-vars
	draw(ctx, roughCanvas, sketchMode) {
		throw new Error('draw() must be implemented by subclass');
	}
}
export default Shape;
