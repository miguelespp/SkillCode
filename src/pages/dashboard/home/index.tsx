import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";

const CardWrapper = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.primary.light,
	color: theme.palette.common.white,
	borderRadius: "16px",
	boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
	transition: "transform 0.3s ease, box-shadow 0.3s ease",
	"&:hover": {
		transform: "scale(1.05)",
		boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
	},
}));

const Home = () => {
	//next use global states
	const recruitmentCount = 120;
	const processCount = 80;

	return (
		<Grid container spacing={3} justifyContent="center" alignItems="center">
			{/* Recruitment Card */}
			<Grid item xs={12} sm={6} md={4}>
				<CardWrapper>
					<CardContent>
						<Box display="flex" flexDirection="column" alignItems="flex-start">
							<Typography variant="h6" gutterBottom>
								Number of Recruitment
							</Typography>
							<Typography variant="h4" component="div" fontWeight="bold">
								{recruitmentCount}
							</Typography>
						</Box>
					</CardContent>
				</CardWrapper>
			</Grid>

			{/* Process Card */}
			<Grid item xs={12} sm={6} md={4}>
				<CardWrapper>
					<CardContent>
						<Typography variant="h6" gutterBottom>
							Number of Processes
						</Typography>
						<Typography variant="h4" component="div" fontWeight="bold">
							{processCount}
						</Typography>
					</CardContent>
				</CardWrapper>
			</Grid>
		</Grid>
	);
};

export default Home;
