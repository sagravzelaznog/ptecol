const { Pool } = require('pg');
const pool = new Pool({
	user: 'postgres', // ¿Es tu nombre de usuario correcto?
	host: 'localhost', // ¿Es el servidor correcto?
	database: 'PTECOL', // ¿El nombre de la base es correcto?
	password: '', // ¿La contraseña es correcta?
	port: 5432, // El puerto por defecto de PostgreSQL
});