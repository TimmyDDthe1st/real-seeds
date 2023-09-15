import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";

export default function Nav() {
	const [value, setValue] = useState(0);

	return (
		<Box sx={{ width: 500 }}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction label="Recents" />
				<BottomNavigationAction label="Favorites" />
				<BottomNavigationAction label="Nearby" />
			</BottomNavigation>
		</Box>
	)
}
