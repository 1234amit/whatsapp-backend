const fs = require("fs");
const path = require("path");

const SESSION_FILE = path.join(__dirname, "../../data/session.json");

function saveSession(session) {
  fs.writeFileSync(SESSION_FILE, JSON.stringify(session));
}

function loadSession() {
  if (fs.existsSync(SESSION_FILE)) {
    const data = fs.readFileSync(SESSION_FILE);
    return JSON.parse(data);
  }
  return null;
}

module.exports = { saveSession, loadSession };