import {
	AutoFixHigh,
	Brush,
	FormatColorFill,
	NearMe,
	Palette,
	ShapeLine,
	Title
} from '@mui/icons-material';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

export default function Toolbar() {
	const [value, setValue] = useState(0);

	const handleTabChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="left-nav-options">
			<Tabs
				value={value}
				onChange={handleTabChange}
				aria-label="tools"
				orientation="vertical"
				indicatorColor="secondary"
				textColor="secondary"
				TabIndicatorProps={{
					style: {
						backgroundColor: 'deeppink' // Change the indicator color
					}
				}}
				sx={{
					'& .MuiTab-root': {
						color: 'black' // Change the default tab color
					}
				}}
			>
				<Tab icon={<NearMe />} label="Select" />
				<Tab icon={<Brush />} label="Brush" />
				<Tab icon={<AutoFixHigh />} label="Eraser" />
				<Tab icon={<FormatColorFill />} label="Bucket" />
				<Tab icon={<Title />} label="Text" />
				<Tab icon={<Palette />} label="Color" />
			</Tabs>
		</div>
	);
}
