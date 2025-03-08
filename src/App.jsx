import React, { useState } from 'react';
import DrawingCanvas from './components/DrawingCanvas';
import Toolbar from './components/Toolbar';
import Shapes from './components/Shapes';
import { MenuOutlined } from '@mui/icons-material';
import { FormControlLabel, Switch, Tooltip } from '@mui/material';
import { tools, shapes } from './options';
export default function App() {
	const [sketchMode, setSketchMode] = useState(true);
	const [showTools, setShowTools] = useState(false);
	const [showShapes, setShowShapes] = useState(true);
	const [tool, setTool] = useState(tools[0]);
	const [shape, setShape] = useState(shapes[0]);

	return (
		<div className="app" id="app">
			<Toolbar
				show={showTools}
				showShapes={setShowShapes}
				tool={tool}
				setTool={setTool}
			/>
			<div id="canvas-container">
				<DrawingCanvas sketchMode={sketchMode} id="canvas0" />
			</div>
			<Shapes show={showShapes} shape={shape} setShape={setShape} />
			<button
				className="menu-btn"
				onClick={() => setShowTools((prev) => !prev)}
			>
				<MenuOutlined style={{ fontSize: 32 }} />
			</button>
			<Tooltip
				title="Hand-drawn like Effects"
				arrow
				slotProps={{
					arrow: {
						sx: {
							color: 'black'
						}
					},
					tooltip: {
						sx: {
							bgcolor: 'black',
							color: 'white'
						}
					}
				}}
			>
				<FormControlLabel
					aria-label="Toggle hand-drawn effects on shapes"
					className="sketch-switch"
					control={<Switch defaultChecked />}
					label="Sketch Mode"
					labelPlacement="start"
					onClick={() => setSketchMode((prev) => !prev)}
				/>
			</Tooltip>
		</div>
	);
}
