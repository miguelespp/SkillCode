import { Outlet } from "react-router-dom";
import DashaboardLayout from "./layout";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#1976d2", // You can customize the primary color here
		},
		secondary: {
			main: "#9c27b0", // Customize the secondary color here
		},
	},
});

const Dashboard = () => {
	return (
		<ThemeProvider theme={theme}>
			<DashaboardLayout>
				<Outlet />
			</DashaboardLayout>
		</ThemeProvider>
	);
};

export default Dashboard;
