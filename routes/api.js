const express = require('express');
const pool = require('../db/db');

const router = express.Router();

// Obtener todos los registros
router.get('/alumnos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM alumnos');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Insertar un nuevo alumno
router.post('/alumnos', async (req, res) => {
    const { nombre, edad, semestre } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO alumnos (nombre, edad, semestre) VALUES ($1, $2, $3) RETURNING *',
            [nombre, edad, semestre]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Actualizar un alumno
router.put('/alumnos/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, edad, semestre } = req.body;
    try {
        const result = await pool.query(
            'UPDATE alumnos SET nombre = $1, edad = $2, semestre = $3 WHERE id = $4 RETURNING *',
            [nombre, edad, semestre, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Eliminar un alumno
router.delete('/alumnos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM alumnos WHERE id = $1', [id]);
        res.send('Registro eliminado');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;