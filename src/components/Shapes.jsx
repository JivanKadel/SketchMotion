import {
	CircleOutlined,
	Crop32,
	DrawOutlined,
	LineAxis
} from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
// import { TypeContext } from '../../contexts/TypeContext';

export default function Shapes() {
	const [shape, setShape] = useState('line');
	return (
		<div className="shapes-list">
			<Button
				id="hand"
				onClick={() => setShape('hand')}
				style={{ color: shape === 'hand' ? '#9c27b0' : 'black' }}
			>
				<DrawOutlined />
				Freehand
			</Button>
			<Button
				id="line"
				onClick={() => setShape('line')}
				style={{ color: shape === 'line' ? '#9c27b0' : 'black' }}
			>
				<LineAxis />
				Line
			</Button>
			<Button
				id="rect"
				onClick={() => setShape('rect')}
				style={{ color: shape === 'rect' ? '#9c27b0' : 'black' }}
			>
				<Crop32 />
				Rectangle
			</Button>
			<Button
				id="circle"
				onClick={() => setShape('circle')}
				style={{ color: shape === 'circle' ? '#9c27b0' : 'black' }}
			>
				<CircleOutlined />
				Circle
			</Button>
			<Button
				id="ellipse"
				onClick={() => setShape('ellipse')}
				style={{ color: shape === 'ellipse' ? '#9c27b0' : 'black' }}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={24}
					height={24}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M3 12c0 -3.314 4.03 -6 9 -6s9 2.686 9 6s-4.03 6 -9 6s-9 -2.686 -9 -6z" />
				</svg>
				Ellipse
			</Button>
		</div>
	);
}
