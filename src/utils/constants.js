//for production
// export const BASE_URL = '/api';

//for local dev
export const BASE_URL = location.hostname === 'localhost' ? 'http://localhost:7777' : '/api';


