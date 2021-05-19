import { apiClient } from 'common/vue/service/api-client.js';

const baseUrl = '/api/multi_class';
const baseService = new BaseService({ baseUrl })

export const MultiClass = {
  ...baseService
}
