import axios from 'axios';

const api = axios.create({ baseURL: 'https://api-teste-aportt.onrender.com' });

export async function registrarPonto({ latitude, longitude, foto }) {
    
    const formData = new FormData();

    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('foto', foto);

    const response = await api.post('/registro', formData);

    return response.data;

}

export async function buscarRegistros() {
    
    const response = await api.get('/registros');

    return response.data;

}