import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Nav from './Nav';

export default function Header() {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<Image src='/RSlogo.gif' width={400} height={100} alt="Real Seeds" />
			<Typography sx={{ textAlign: 'center' }}>The best vegetable seeds for the Kitchen Garden</Typography>
			<Typography sx={{ textAlign: 'center' }}>~ UK Ltd Company No. 5924934 ~ DEFRA Registered Seed Merchant No 7289 ~</Typography>
			<Nav />
		</Box>
	)
}
