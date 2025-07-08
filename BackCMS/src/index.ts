import * as dotenv from 'dotenv';
import { app, initializeApp } from './app';

dotenv.config();

const PORT = process.env.PORT || 3000;

initializeApp().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});