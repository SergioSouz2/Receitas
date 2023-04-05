import axios from 'axios';

/*
// Rodar com IPV4: npx json-server --watch -d 180 --host 192.168.101.3 db.json
*/

export const api = axios.create({
    baseURL: 'http://192.168.101.3:3000'
})