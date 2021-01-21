export const SIGN_IN_URL = process.env.NODE_ENV === 'production' ? (process.env.SIGN_IN_URL || 'https://fancydiscord.com/auth/discord/new') : 'http://localhost:4001/auth/discord/new'
