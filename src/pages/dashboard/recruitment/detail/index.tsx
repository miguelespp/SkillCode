import React, { useEffect, useState } from "react";
import {
	Box,
	Typography,
	TextField,
	Button,
	Grid,
	Paper,
	Chip,
	IconButton,
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
	Slider,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import type Candidate from "../../../../types/Candidate";
import { useParams } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import Api from "../../../../services/Api";

const DetailView = () => {
	const { id } = useParams<{ id: string }>();
	const [skillsFilter, setSkillsFilter] = useState<string>("");
	const [experienceFilter, setExperienceFilter] = useState<number>(0);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
	const [filterCandidates, setFilterCandidates] =
		useState<Candidate[]>(candidates);

	useEffect(() => {
		const fetchData = async () => {
      console.log(id);
      const res = await Api.get(`candidates/offer/${id}/`);
      if (res.status === 200) {
        setCandidates(res.data);
        setFilterCandidates(res.data);
      }
      console.log(res.data);
    }
    fetchData();
		
	}, [id]);

	const applyFilters = () => {
		const filteredCandidates = candidates.filter((candidate) => {
			let skillsMatch = true;
			let experienceMatch = true;

			if (skillsFilter.length > 0) {
				skillsMatch = candidate.skills.includes(skillsFilter);
			}

			if (experienceFilter > 0) {
				experienceMatch = candidate.experience >= experienceFilter;
			}

			return skillsMatch && experienceMatch;
		});

		setFilterCandidates(filteredCandidates);
	};

	const handleOpenCV = (cv) => {
		alert(`Opening CV: ${cv}`);
	};

	const handleRemoveCandidate = (deleteID: number | undefined) => {
		// candidates = candidates.filter((candidate) => candidate.id !== deleteID;
	};

	return (
		<Box sx={{ p: 3 }}>
			<Typography variant="h4" gutterBottom>
				Gestión de Reclutamiento
			</Typography>

			{/* Filters Section */}
			<Paper sx={{ p: 3, mb: 3 }}>
				<Typography variant="h6">Filtros de Selección</Typography>
				<Grid container spacing={2} sx={{ mt: 2 }}>
					<Grid item xs={12} sm={6} md={3}>
						<FormControl fullWidth>
							<InputLabel>Habilidades</InputLabel>
							<Select
								value={skillsFilter}
								name="skills"
								onChange={(event) =>
									setSkillsFilter(event.target.value as string)
								}
							>
								<MenuItem value="React">React</MenuItem>
								<MenuItem value="Python">Python</MenuItem>
								<MenuItem value="JavaScript">JavaScript</MenuItem>
								<MenuItem value="Node.js">Node.js</MenuItem>
								<MenuItem value="Java">Java</MenuItem>
								<MenuItem value="SQL">SQL</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Slider
						value={experienceFilter}
						name="experience"
						onChange={(event, value) => setExperienceFilter(value as number)}
						valueLabelDisplay="auto"
						valueLabelFormat={(value) => `${value} años`}
						min={0}
						max={10}
						step={1}
						marks={[
							{ value: 0, label: "0" },
							{ value: 10, label: "10" },
						]}
						sx={{ mt: 2, ml: 2, width: 200 }}
					/>
				</Grid>
				<Button
					variant="contained"
					startIcon={<FilterListIcon />}
					onClick={applyFilters}
					sx={{ mt: 2 }}
				>
					Aplicar Filtros
				</Button>
			</Paper>

			{/* Candidates List Section */}
			<Paper sx={{ p: 3 }}>
				<Typography variant="h6">Lista de Candidatos</Typography>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Nombre</TableCell>
								<TableCell>Habilidades</TableCell>
								<TableCell>Experiencia</TableCell>
								<TableCell>Ubicación</TableCell>
								<TableCell>Educación</TableCell>
								<TableCell>CV</TableCell>
								<TableCell>Acciones</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{filterCandidates.map((candidate, index) => (
								<TableRow key={index}>
									<TableCell>{candidate.name}</TableCell>
									<TableCell>{candidate.skills}</TableCell>
									<TableCell>{candidate.experience}</TableCell>
									<TableCell>{candidate.location}</TableCell>
									<TableCell>{candidate.education}</TableCell>
									<TableCell>
										<IconButton
											color="primary"
											onClick={() => handleOpenCV(candidate.cv)}
										>
											<FileOpenIcon />
										</IconButton>
									</TableCell>
									<TableCell>
										<Button
											variant="contained"
											color="warning"
											startIcon={<DeleteOutline />}
											onClick={() => handleRemoveCandidate(candidate.id)}
										>
											Descartar
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	);
};

export default DetailView;
