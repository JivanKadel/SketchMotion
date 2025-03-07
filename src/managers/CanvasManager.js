import rough from 'roughjs/bin/rough';
class CanvasManager {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.frames = [[]];
		this.currentFrame = 0;
		this.roughCanvas = rough.canvas(canvas);
	}
	addShape(shape) {
		this.frames[this.currentFrame].push(shape);
	}
	render(sketchMode) {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.frames[this.currentFrame].forEach((shape) =>
			shape.draw(this.ctx, this.roughCanvas, sketchMode)
		);
	}
	nextFrame() {
		this.currentFrame++;
		if (!this.frames[this.currentFrame]) this.frames.push([]);
	}
}
export default CanvasManager;
