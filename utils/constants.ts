export const API_HOST = process.env.NODE_ENV === 'production' ? 'https://api.fancy-discord.com' : 'http://localhost:4001'

export const SIGN_IN_URL = `${API_HOST}/auth/discord/new`
