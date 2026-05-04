import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

// Directorio de logs
const logsDir = '/app/logs';  // ✅ Ruta absoluta que coincide con Dockerfile

// Asegurar que existe el directorio de logs
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}

// Función para escribir logs
function writeLog() {
    const now = new Date();
    const timestamp = now.toISOString();
    const logMessage = `[${timestamp}] Aplicación ejecutada\n`;
    const logPath = path.join(logsDir, 'access.log');
    
    fs.appendFileSync(logPath, logMessage);
    console.log(`✅ Log escrito: ${logMessage.trim()}`);
}

// Ruta principal
app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 Aplicación de Logs funcionando!</h1>
        <p>Visita <a href="/logs">/logs</a> para ver los registros</p>
    `);
});

// Ruta para ver los logs
app.get('/logs', (req, res) => {
    const logPath = path.join(logsDir, 'access.log');
    
    if (fs.existsSync(logPath)) {
        const logs = fs.readFileSync(logPath, 'utf-8');
        res.type('text/plain');
        res.send(logs);
    } else {
        res.send('No hay logs todavía');
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🌐 Servidor corriendo en http://localhost:${PORT}`);
    console.log('📝 Escribiendo logs cada 5 segundos...');
    
    // Escribir log inicial
    writeLog();
    
    // Escribir log cada 5 segundos
    setInterval(writeLog, 5000);
});