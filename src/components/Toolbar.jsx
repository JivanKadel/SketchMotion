import {
	AutoFixHigh,
	DrawOutlined,
	FormatColorFill,
	NearMe,
	Palette,
	SaveOutlined,
	Title
} from '@mui/icons-material';
import { Tab, Tabs } from '@mui/material';

export default function Toolbar({
	show = false,
	tool = 'pencil',
	setTool,
	showShapes
}) {
	console.log(tool);

	const handleTabChange = (event, newValue) => {
		setTool(newValue);
		if (newValue == 'draw') {
			showShapes(true);
		} else {
			showShapes(false);
		}
	};
	if (!show) {
		return;
	}

	return (
		<div className="left-nav-options">
			<Tabs
				value={tool}
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
				<Tab icon={<DrawOutlined />} label="Draw" value="draw" />
				<Tab icon={<NearMe />} label="Select" value="select" />
				<Tab icon={<AutoFixHigh />} label="Eraser" value="eraser" />
				<Tab icon={<FormatColorFill />} label="Bucket" value="bucket" />
				<Tab icon={<Title />} label="Text" value="text" />
				<Tab icon={<Palette />} label="Color" value="color" />
				<Tab icon={<SaveOutlined />} label="Export" value="export" />
			</Tabs>
		</div>
	);
}
