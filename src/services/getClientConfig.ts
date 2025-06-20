import { store } from '@/state'

const clientBearerToken = store.getState().tokens.client

export const getClientConfig = fetch('', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${clientBearerToken}`,
  },
})
  .then((res) => {
    console.debug(res.json())
    return res.json()
  })
  .catch((e) => console.error(e))
  .finally(() => console.debug('All Done'))
