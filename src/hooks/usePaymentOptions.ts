import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/state'
import { ClientConfigResponse } from '@/types/general'

export const usePaymentOptions = (): any => {
  const digitalWallets = useSelector(
    (state: RootState) =>
      (state.clientConfiguration.config as ClientConfigResponse)
        ?.digitalWallets || []
  )

  const getDigitalWalletOptions = useCallback(async () => {
    try {
      return digitalWallets
    } catch (e) {
      const errorMessage = `There was a problem with the digital wallets`
      console.error(errorMessage, 'DIGITAL_WALLETS_ERROR', {
        rootError: (e as Error).message,
      })
    }
  }, [digitalWallets])

  return { getDigitalWalletOptions }
}
