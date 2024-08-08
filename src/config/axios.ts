import axios, { AxiosInstance } from 'axios';

// Crie uma instância do axios com configurações padrão
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://contagemsalvador.vercel.app/', // Substitua pela URL base da sua API
  timeout: 1000, // Tempo limite de 1000ms
  headers: { 'Content-Type': 'application/json' } // Cabeçalhos padrão
});

export default apiClient