import React, { useRef, useEffect, useState, useCallback } from 'react';
import CanvasManager from '../managers/CanvasManager';
import Rectangle from '../shapes/Rectangle';

const DrawingCanvas = ({ sketchMode }) => {
	const canvasRef = useRef(null);
	const [canvasManager, setCanvasManager] = useState(null);

	useEffect(() => {
		if (canvasRef.current) {
			setCanvasManager(new CanvasManager(canvasRef.current));
		}
	}, []);

	const handleMouseDown = useCallback(
		(e) => {
			if (!canvasManager) return;
			const rect = new Rectangle(e.clientX, e.clientY, 50, 50);
			canvasManager.addShape(rect);
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
