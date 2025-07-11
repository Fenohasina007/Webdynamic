import * as dotenv from 'dotenv';
import { app, initializeApp } from './app';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerOptions from './config/swagger'; // Importe les options Swagger

dotenv.config();

const PORT = process.env.PORT || 3000;

// Générer la spécification Swagger
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Middleware pour Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Initialiser l'application et démarrer le serveur
initializeApp().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Erreur lors de l\'initialisation de l\'application:', error);
});