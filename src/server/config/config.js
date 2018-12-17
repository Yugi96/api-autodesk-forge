module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODD_SESSIONS_URL: process.env.MONGODD_SESSIONS_URL || 'mongodb://localhost:27017/connect_sessions',
  FORGE_CLIENT_ID: 'tPLUuAqvUJN7oewURPiKU711TXAUX0N8',
  FORGE_CLIENT_SECRET: 'YAw1middIKn8Aa9d',
  FORGE_REDIRECT_URI: 'http://localhost:3000/api/auth/callback'
}
