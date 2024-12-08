import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
  Button,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
const Publication = () => {
  const [selectedPortals, setSelectedPortals] = useState({
    linkedIn: false,
    indeed: false,
    glassdoor: false,
  });
  const [vacancyDetails, setVacancyDetails] = useState({
    title: '',
    description: '',
    requirements: '',
    closingDate: null,
    priority: '',
  });

  const handlePortalChange = (event) => {
    setSelectedPortals({
      ...selectedPortals,
      [event.target.name]: event.target.checked,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVacancyDetails({ ...vacancyDetails, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Selected Portals:', selectedPortals);
    console.log('Vacancy Details:', vacancyDetails);
    // Lógica para enviar los datos a los portales seleccionados.
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Publicación de Vacantes
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Seleccionar Portales
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPortals.linkedIn}
                onChange={handlePortalChange}
                name="linkedIn"
              />
            }
            label="LinkedIn"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPortals.indeed}
                onChange={handlePortalChange}
                name="indeed"
              />
            }
            label="Indeed"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPortals.glassdoor}
                onChange={handlePortalChange}
                name="glassdoor"
              />
            }
            label="Glassdoor"
          />
        </FormGroup>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Detalles de la Vacante
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Título de la Vacante"
              name="title"
              value={vacancyDetails.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Descripción"
              name="description"
              value={vacancyDetails.description}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Requisitos"
              name="requirements"
              value={vacancyDetails.requirements}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Fecha de Cierre"
                value={vacancyDetails.closingDate}
                onChange={(date) =>
                  setVacancyDetails({ ...vacancyDetails, closingDate: date })
                }
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nivel de Prioridad"
              name="priority"
              value={vacancyDetails.priority}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 4, textAlign: 'right' }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Publicar Vacante
        </Button>
      </Box>
    </Container>
  );
};

export default Publication;
