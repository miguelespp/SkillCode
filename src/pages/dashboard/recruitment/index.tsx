import React, { useState } from 'react';
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
  FormControl
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import FilterListIcon from '@mui/icons-material/FilterList';
import FileOpenIcon from '@mui/icons-material/FileOpen';

const Recruitment = () => {
  const [documents, setDocuments] = useState([]);
  const [filters, setFilters] = useState({
    skills: '',
    experience: '',
    location: '',
    education: '',
  });
  const [candidates, setCandidates] = useState([
    { name: 'Carlos Espinoza', skills: 'React, Node.js', experience: '3 años', location: 'Lima', education: 'Egresado', cv: 'CMEP.pdf' },
    { name: 'Andrew Serna', skills: 'Python, AI', experience: '5 años', location: 'Chincha', education: 'Maestría', cv: 'SernaHOT.pdf' },
  ]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocuments([...documents, file.name]);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    // Apply filters to candidates (example logic)
    console.log('Filters applied:', filters);
  };

  const handleOpenCV = (cv) => {
    alert(`Opening CV: ${cv}`); // Replace with actual logic to open/download CV
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Reclutamiento
      </Typography>

      {/* Document Upload Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Gestión de Documentos</Typography>
        <Button variant="contained" component="label" startIcon={<UploadFileIcon />} sx={{ mt: 2 }}>
          Subir Documento
          <input hidden type="file" onChange={handleUpload} />
        </Button>
        <Box sx={{ mt: 2 }}>
          {documents.map((doc, index) => (
            <Chip key={index} label={doc} sx={{ mr: 1, mt: 1 }} />
          ))}
        </Box>
      </Paper>

      {/* Filters Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Filtros de Selección</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Habilidades</InputLabel>
              <Select
                value={filters.skills}
                name="skills"
                onChange={handleFilterChange}
              >
                <MenuItem value="React">React</MenuItem>
                <MenuItem value="Python">Python</MenuItem>
                <MenuItem value="AI">AI</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Experiencia"
              name="experience"
              value={filters.experience}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Ubicación"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Educación"
              name="education"
              value={filters.education}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {candidates.map((candidate, index) => (
                <TableRow key={index}>
                  <TableCell>{candidate.name}</TableCell>
                  <TableCell>{candidate.skills}</TableCell>
                  <TableCell>{candidate.experience}</TableCell>
                  <TableCell>{candidate.location}</TableCell>
                  <TableCell>{candidate.education}</TableCell>
				  <TableCell>
					<IconButton color="primary" onClick={() => handleOpenCV(candidate.cv)}>
						<FileOpenIcon />
					</IconButton>
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

export default Recruitment;
