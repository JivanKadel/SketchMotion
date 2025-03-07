import React, { useState, useCallback } from 'react';
import DrawingCanvas from './components/DrawingCanvas';
import Toolbar from './components/Toolbar';
import Shapes from './components/Shapes';
import { MenuOutlined } from '@mui/icons-material';

export default function App() {
	const [sketchMode, setSketchMode] = useState(true);

	const toggleSketchMode = useCallback(
		() => setSketchMode((prev) => !prev),
		[]
	);

	return (
		<div className="app" id="app">
			<Toolbar sketchMode={sketchMode} setSketchMode={toggleSketchMode} />
			<div id="canvas-container">
				<DrawingCanvas sketchMode={sketchMode} id="canvas0" />
			</div>
			<Shapes />
			<button className="menu-btn">
				<MenuOutlined style={{ fontSize: 32 }} />
			</button>
		</div>
	);
}
