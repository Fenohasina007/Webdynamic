import express, { Application } from 'express';
import cors from 'cors';
import { AppDataSource } from './config/database';
import siteRoutes from './routes/site.routes';
import composanteRoutes from './routes/composante.routes';
import contenuRoutes from './routes/contenu.routes';
import personnalisationRoutes from './routes/personnalisation.routes';
import compteRoutes from './routes/compte.routes';
import formationRoutes from './routes/formation.routes'
import siteDataRout from './routes/siteData.routes';
import pageRoutes from './routes/page.routes';

const app: Application = express();

// Configurer CORS pour autoriser le frontend React
app.use(cors({
  origin: 'http://localhost:5174', // URL de votre frontend Vite (ajustez si nécessaire)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use('/api', siteRoutes);
app.use('/api', composanteRoutes);
app.use('/api', contenuRoutes);
app.use('/api', personnalisationRoutes);
app.use('/api', compteRoutes);
app.use('/api', formationRoutes);
app.use('/api', siteDataRout);
app.use('/apo', pageRoutes)


// Route de test pour vérifier la connexion
app.get('/test-connection', (req, res) => {
  res.status(200).json({ message: 'Bonjours la relation de reacte + vite et express est avec succés' });
});

const initializeApp = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
};

export { app, initializeApp };