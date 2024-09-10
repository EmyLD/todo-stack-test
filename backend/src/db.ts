import Knex from "knex";
import { Model } from "objection";
import knexConfig from "./knexfile";

// Initialise Knex avec la configuration
const knex = Knex(knexConfig);

// Lier l'instance Knex à Objection.js
Model.knex(knex);

export default knex;
