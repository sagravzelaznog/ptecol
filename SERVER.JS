const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');


const app = express();
const PORT = 5423;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
pool.query('SELECT NOW()', (err, res) => {
	if (err) {
					console.error('Error ejecutando la consulta:', err.stack);
	} else {
					console.log('Base de datos responde correctamente:', res.rows);
	}
});
