import axios from 'axios';

import { PRODUCTS_API } from '@/config/env-vars';

export const productsApi = axios.create({
  baseURL: PRODUCTS_API,
});
