import api from 'services/api';
import { ScaleProps } from './types_d';

export const fetchScales = () => api.get<ScaleProps[]>('scales').then(res=> res.data)