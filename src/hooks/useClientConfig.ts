import { useCallback } from 'react'

import { getClientConfig } from '@/services/getClientConfig'

export const useClientConfig = (): any => {
  const requestClientConfig = useCallback(async () => {
    try {
      await getClientConfig()
    } catch (e) {
      const errorMessage = `There was a problem with the useClientConfig request `
      console.error(errorMessage, 'REQ_ERROR', {
        rootError: (e as Error).message,
      })
    }
  }, [])

  return { requestClientConfig }
}
