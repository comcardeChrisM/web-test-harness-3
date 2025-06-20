import { store } from '@/state'
import { clientConfigurationSlice } from '@/state/reducers/clientConfiguration'
import { errorsSlice } from '@/state/reducers/errors'

export const getClientConfig = async () => {
  const clientBearerToken = store.getState().tokens.client

  return fetch(
    'https://sun3.devstack.poweredbybridge.com/v2/configuration?currencyCode=GBP&amount=1000000',
    {
      method: 'GET',
      headers: {
        SDK: 'tes-harness-3',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${clientBearerToken}`,
      },
    }
  )
    .then(async (res) => {
      if (!res.ok) {
        store.dispatch(
          errorsSlice.actions.setGlobalError({
            message: `HTTP error! status: ${res.status}, statusText: ${res.statusText}`,
          })
        )
        throw new Error(
          `HTTP error! status: ${res.status}, statusText: ${res.statusText}`
        )
      }

      const result = await res.json()

      store.dispatch(errorsSlice.actions.setGlobalError(null))
      store.dispatch(
        clientConfigurationSlice.actions.setClientConfiguration(result)
      )

      return result
    })
    .catch((e) => {
      const errorPayload = {
        message: e.message,
        name: e.name,
        stack: e.stack,
      }
      // Dispatch the error to the Redux store
      store.dispatch(errorsSlice.actions.setGlobalError(errorPayload))
    })
    .finally(() => console.debug('All Done'))
}
