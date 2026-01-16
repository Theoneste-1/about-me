
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(process.cwd(), 'messages.db');
const logPath = path.join(process.cwd(), 'db-init.log');

function log(msg) {
    console.log(msg);
    fs.appendFileSync(logPath, msg + '\n');
}

log(`Initializing database at: ${dbPath}`);

try {
  const db = new Database(dbPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  log('Database initialized successfully.');
  log('Table "messages" is ready.');
} catch (error) {
  log('Error initializing database: ' + error.message);
  process.exit(1);
}
