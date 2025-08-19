// Punto de entrada mínimo: reexporta la API pública
import { hello } from './hello.js';

// Exponer la app express como opcional (no inicia un servidor aquí)
import express from 'express';
const app = express();

export { app, hello };
