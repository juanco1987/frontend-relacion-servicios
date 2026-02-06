import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import CustomButton from '../../common/CustomButton';
import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';
import { ANIMATIONS } from '../../../config/animations';
import excelIcon from '../../../assets/document_microsoft_excel.png';
import engraneIcon from '../../../assets/engrane.png';

function NoDataState({ onFileChange }) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Paper
        elevation={0}
        sx={{
          background: theme.fondoContenedor,
          borderRadius: '28px',
          boxShadow: theme.sombraContenedor,
          p: { xs: 2, md: 4 },
          overflow: 'hidden',
          minHeight: { xs: 'auto', md: '60vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Box
          component="img"
          src={excelIcon}
          alt="Excel Analytics"
          sx={{ 
            width: { xs: 64, md: 80 }, 
            height: { xs: 64, md: 80 },
            mb: { xs: 2, md: 3 },
            objectFit: 'contain',
            objectPosition: 'center',
            filter: theme.modo === 'oscuro' ? 'invert(1)' : 'none',
            opacity: 0.9,
            imageRendering: 'crisp-edges'
          }}
        />
        
        <Typography variant="h5" sx={{
          color: theme.textoPrincipal,
          fontWeight: 'bold',
          mb: { xs: 1.5, md: 2 },
          fontSize: { xs: '1.5rem', md: '2.2rem' }
        }}>
          Sin datos aún
        </Typography>
        
        <Typography variant="body2" sx={{
          color: theme.textoSecundario,
          mb: { xs: 3, md: 4 },
          lineHeight: 1.5,
          maxWidth: { xs: '100%', md: 600 },
          fontSize: { xs: '0.9rem', md: '1rem' }
        }}>
          Sube tu archivo Excel para comenzar a analizar tus datos financieros
        </Typography>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: { xs: 3, md: 4 },
          p: { xs: 2, md: 3 },
          borderRadius: '16px',
          background: theme.fondoOverlay,
          border: `2px dashed ${theme.bordePrincipal}`,
          maxWidth: { xs: '100%', md: 400 },
          width: '100%'
        }}>
          <Box
            component="img"
            src={engraneIcon}
            alt="Configuración"
            sx={{ 
              width: 24, 
              height: 24,
              mr: 2,
              filter: theme.modo === 'oscuro' ? 'invert(1)' : 'none'
            }}
          />
          <Typography variant="body2" sx={{
            color: theme.textoPrincipal,
            fontWeight: 500,
            fontSize: { xs: '0.85rem', md: '1rem' }
          }}>
            📊 Archivos: .xlsx, .xls
          </Typography>
        </Box>

        {/* Campo de carga */}
        <Box sx={{ width: '100%', maxWidth: { xs: '100%', md: 500 }, mb: 3, px: { xs: 1, md: 0 } }}>          
          <motion.div
            whileHover={ANIMATIONS.formFieldHover}
            whileTap={{ scale: 0.98 }}
          >
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end', justifyContent: 'center' }}>
              <CustomButton
                variant="outlined"
                component="label"
                size="large"
                sx={{
                  background: theme.fondoOverlay,
                  color: theme.textoPrincipal,
                  borderColor: theme.bordePrincipal,
                  borderRadius: '25px',
                  px: { xs: 3, md: 4 },
                  py: 1.5,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  borderWidth: '2px',
                  minWidth: { xs: '100%', md: '200px' },
                  height: { xs: '48px', md: '50px' },
                  boxShadow: theme.sombraContenedor,
                  '&:hover': {
                    background: theme.fondoHover,
                    borderColor: theme.bordeHover,
                    transform: 'translateY(-2px)',
                    boxShadow: theme.sombraHover,
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                  },
                  '&:focus': {
                    borderColor: theme.bordeHover,
                    borderWidth: '2px',
                  }
                }}
              >
                📁 Seleccionar Archivo
                <input
                  type="file"
                  hidden
                  accept=".xlsx,.xls"
                  onChange={onFileChange}
                />
              </CustomButton>
            </Box>
          </motion.div>
        </Box>

        <Typography variant="body2" sx={{
          color: theme.textoSecundario,
          fontSize: { xs: '0.85rem', md: '0.95rem' }
        }}>
          ✨ Visualiza gráficos, indicadores y análisis detallados
        </Typography>
      </Paper>
    </motion.div>
  );
}

export default NoDataState;