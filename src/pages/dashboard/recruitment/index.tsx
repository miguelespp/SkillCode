import React, { useEffect, useState } from "react";
import {
	Box,
	Typography,
	Button,
	Grid,
	Paper,
	Chip,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	InputLabel,
	Select,
	MenuItem,
	FormControl,
} from "@mui/material";
import type Offer from "../../../types/recruitment";
import { useNavigate } from "react-router-dom";
import Api from "../../../services/Api";


const Recruitment = () => {
	const [filters, setFilters] = useState<"asc" | "des">("des");
	const [Process, setProcess] = useState<Offer[]>([]);
	const [filterProcess, setFilterProcess] = useState<Offer[]>(Process);
	const navigator = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			const res = await Api.get("offers/");
			if (res.status === 200) {
				setProcess(res.data);
				setFilterProcess(res.data);
			}
		};
		fetchData();
	}, []);

	const handleFilterChange = (e) => {
		if (e.target.value === "asc" || e.target.value === "des") {
			setFilters(e.target.value);
			applyFilters(e.target.value);
		}
		return;
	};

	const applyFilters = (filter: string) => {
		// Aplica filtros para la fecha de cierre
		const filteredProcess = Process.sort((a, b) => {
			if (filter === "asc") {
				return (
					new Date(a.closingDate).getTime() - new Date(b.closingDate).getTime()
				);
			}
			return (
				new Date(b.closingDate).getTime() - new Date(a.closingDate).getTime()
			);
		});

		setFilterProcess(filteredProcess);
	};

	const handleDoubleClick = (id: number | undefined) => {
		if (id) {
			navigator(`/dashboard/recruitment/${id}`);
		}
		return;
	};

	return (
		<Box sx={{ p: 3 }}>
			<Typography variant="h4" gutterBottom>
				Gestión de Ofertas
			</Typography>

			{/* Filters Section */}
			<Paper sx={{ p: 3, mb: 3 }}>
				<Typography variant="h6">Filtros de Selección</Typography>
				<Grid container spacing={2} sx={{ mt: 1 }}>
					<Grid item xs={12} sm={6} md={3}>
						<FormControl fullWidth>
							<InputLabel>Orden</InputLabel>
							<Select
								value={filters}
								name="skills"
								onChange={handleFilterChange}
							>
								<MenuItem value="asc">Ascendente</MenuItem>
								<MenuItem value="des">Descendente</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
			</Paper>

			{/* Candidates List Section */}
			<Paper sx={{ p: 3 }}>
				<Typography variant="h6">Lista de Candidatos</Typography>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Titulo</TableCell>
								<TableCell>Descripción</TableCell>
								<TableCell>Requisitos</TableCell>
								<TableCell>Fecha de Cierre</TableCell>
								<TableCell>Prioridad</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{filterProcess.map((process, index) => (
								<TableRow
									key={process.id}
									onDoubleClick={() => handleDoubleClick(process.id)}
								>
									<TableCell>{process.title}</TableCell>
									<TableCell>{process.description}</TableCell>
									<TableCell>{process.requirements}</TableCell>
									<TableCell>{process.closingDate}</TableCell>
									<TableCell>{process.priority}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	);
};

export default Recruitment;
