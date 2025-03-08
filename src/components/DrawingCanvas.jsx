import React, { useRef, useEffect, useState, useCallback } from 'react';
import CanvasManager from '../managers/CanvasManager';
// import Rectangle from '../shapes/Rectangle';
import Circle from '../shapes/Circle';

const DrawingCanvas = ({ sketchMode }) => {
	const canvasRef = useRef(null);
	const [canvasManager, setCanvasManager] = useState(null);

	useEffect(() => {
		if (canvasRef.current) {
			setCanvasManager(new CanvasManager(canvasRef.current));
		}
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (canvasRef.current) {
				canvasRef.current.width = window.innerWidth - 1;
				canvasRef.current.height = window.innerHeight - 1;
				if (canvasManager) {
					canvasManager.render(sketchMode);
				}
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleMouseDown = useCallback(
		(e) => {
			if (!canvasManager) return;

			const circle = new Circle(e.clientX, e.clientY, 50);
			canvasManager.addShape(circle);
			canvasManager.render(sketchMode);
		},
		[canvasManager, sketchMode]
	);

	return (
		<canvas
			ref={canvasRef}
			width={window.innerWidth - 1}
			height={window.innerHeight - 1}
			onMouseDown={handleMouseDown}
			style={{
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				border: '1px solid black'
			}}
		/>
	);
};
export default DrawingCanvas;
