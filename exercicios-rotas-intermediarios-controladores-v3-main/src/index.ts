import 'dotenv/config'
import express from "express";
import { apiListaConvidados, convidado, convidados} from './controladores';
import { validarFiltro } from './intermediarios';

const app = express();

app.get('/', apiListaConvidados)

app.get('/convidados', validarFiltro, convidados)

app.get('/convidados/:id', convidado)

app.listen(process.env.PORT)

