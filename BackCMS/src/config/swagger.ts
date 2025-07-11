import { SwaggerOptions } from 'swagger-ui-express';

const options: SwaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CMS API " Documentation and Test "',
      description: 'API documentation and test for the CMS project',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Chemin vers tes fichiers TypeScript
};

export default options;