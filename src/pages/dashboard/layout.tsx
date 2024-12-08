import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
	AccountCircle,
	ExitToApp,
	Home,
	PhotoFilter,
} from "@mui/icons-material";
import RadarIcon from "@mui/icons-material/Radar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import "./index.css";
import { useNavigate } from "react-router-dom";

type DashaboardLayoutProps = {
	children: React.ReactNode;
};

const OptionsIcons: Record<string, React.ReactNode> = {
	Home: <Home />,
	Publication: <RadarIcon />,
	Recruitment: <PhotoFilter />,
};
const drawerWidth = 240;

const DashaboardLayout = ({ children }: DashaboardLayoutProps) => {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const navigation = useNavigate();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleListItemClick = (text: string) => {
		if (text === "Home") {
			navigation("/dashboard");
			return;
		}
		const path = "/dashboard/".concat(text.toLowerCase());
		navigation(path);
	};

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{["Home", "Publication", "Recruitment"].map((text) => (
					<ListItem key={text} disablePadding>
						<ListItemButton onClick={() => handleListItemClick(text)}>
							<ListItemIcon>{OptionsIcons[text]}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				<ListItem key={"Profile"} disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<AccountCircle />
						</ListItemIcon>
						<ListItemText primary={"Profile"} />
					</ListItemButton>
				</ListItem>
				<ListItem key={"Output"} disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<ExitToApp />
						</ListItemIcon>
						<ListItemText primary={"Exit"} />
					</ListItemButton>
				</ListItem>
			</List>
		</div>
	);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						SkillCode
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: "none", sm: "block" },
					"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
				}}
				open
			>
				{drawer}
			</Drawer>
			<Drawer
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
				}}
			>
				{drawer}
			</Drawer>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />

				{children}
			</Box>
		</Box>
	);
};

export default DashaboardLayout;
