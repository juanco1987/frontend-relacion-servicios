import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/mi_logo.ico';
import { APP_MESSAGES } from '../../config/appConfig';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const Header = React.memo(() => {
  const { theme, modo, alternarTema } = useTheme();

  return (
    <Box
      sx={{
        background: 'none',
        borderRadius: 0,
        boxShadow: 'none',
        p: { xs: 2, md: 2 },
        mb: 0,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 2, md: 3 },
        minHeight: { xs: 'auto', md: 110 },
        position: 'relative',
      }}
    >
      {/* Botón de alternancia de tema */}
      <Box
        sx={{
          position: { xs: 'absolute', md: 'relative' },
          top: { xs: 8, md: 'auto' },
          right: { xs: 8, md: 'auto' },
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          order: { xs: -1, md: 3 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            transformOrigin: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            onClick={alternarTema}
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: theme.fondoOverlay,
              color: theme.textoPrincipal,
              border: `2px solid ${theme.bordePrincipal}`,
              boxShadow: theme.sombraHeader,
              '&:hover': {
                background: theme.fondoOverlay,
                borderColor: theme.bordeHover,
              },
              transition: 'all 0.2s ease',
              transform: 'none',
            }}
            title={`Cambiar a tema ${modo === 'oscuro' ? 'claro' : 'oscuro'}`}
          >
            {modo === 'oscuro' ? '☀️' : '🌙'}
          </IconButton>
        </motion.div>
      </Box>

      {/* Logo con animación de rotación */}
      <motion.div
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ order: 1 }}
      >
        <Avatar
          src={logo}
          alt="Logo"
          sx={{
            width: { xs: 60, md: 70 },
            height: { xs: 60, md: 70 },
            bgcolor: 'white',
            boxShadow: theme.sombraHeader,
            flexShrink: 0,
          }}
        />
      </motion.div>

      {/* Texto del título y subtítulo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        style={{ order: 2, textAlign: 'center', flex: 1 }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0.5,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: theme.textoPrincipal,
                fontWeight: 700,
                lineHeight: 1.2,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              📊 {APP_MESSAGES.APP_TITLE}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Typography
              variant="body2"
              component="div"
              sx={{
                color: theme.textoSecundario,
                fontWeight: 500,
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                maxWidth: '90%',
              }}
            >
              {APP_MESSAGES.HEADER_SUBTITLE}
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
});

export default Header; 