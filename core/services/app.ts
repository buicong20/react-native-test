import client from 'services/client';
import {BASE_URL} from 'core/utils/config';
export async function getInfo() {
  const request = await client.get(BASE_URL + '?randomapi');
  return request;
}
