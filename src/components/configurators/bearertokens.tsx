import { useEffect, useState } from 'react'

import * as jwt from 'jsonwebtoken'

import { useClientConfig } from '@/hooks/useClientConfig'
import { store } from '@/state'
import { tokensSlice } from '@/state/reducers/tokens'
import { BearerToken, BearerTokenTitle } from '@/types/general'

export interface BearerTokensProps {
  type: BearerToken
  title: BearerTokenTitle
  subTitle?: string
}

export default function BearerTokens({
  type,
  title,
  subTitle,
}: BearerTokensProps) {
  const [bearerTokenType] = useState<BearerToken>(type)
  const [clientMerchantAccount, setClientMerchantAccount] = useState<string>('')
  const [serverMerchantAccount, setServerMerchantAccount] = useState<string>('')

  const { requestClientConfig } = useClientConfig()

  const showMerchantAccount = () => {
    if (bearerTokenType === BearerToken.CLIENT_TOKEN) {
      return clientMerchantAccount || 'Unknown Client Merchant Account'
    }
    if (bearerTokenType === BearerToken.SERVER_TOKEN) {
      return serverMerchantAccount || 'Unknown Server Merchant Account'
    }
    return ''
  }

  useEffect(() => {
    showMerchantAccount()
  })

  const decodeTokenAndGetMerchant = (token: string) => {
    const jwtPayload = jwt.decode(token)
    return jwtPayload?.sub ?? 'Unknown Merchant Account'
  }

  const handleBearerToken = (evt: any) => {
    if (bearerTokenType === BearerToken.CLIENT_TOKEN) {
      const merchant = decodeTokenAndGetMerchant(evt.target.value)
      setClientMerchantAccount(merchant)
      // Dispatch the client token to the Redux store
      // This will trigger the useClientConfig hook to fetch the client config
      // and update the state accordingly
      store.dispatch(tokensSlice.actions.setClient(evt.target.value))
      // Request client configuration after setting the token
      requestClientConfig()
    }
    if (bearerTokenType === BearerToken.SERVER_TOKEN) {
      const merchant = decodeTokenAndGetMerchant(evt.target.value)
      setServerMerchantAccount(merchant)
      // Dispatch the server token to the Redux store
      // This will allow the server token to be used in API requests
      // and update the state accordingly
      store.dispatch(tokensSlice.actions.setServer(evt.target.value))
    }
    if (bearerTokenType === BearerToken.CLIENT_TOKEN) {
      // Decode the JWT token to get the merchant account
      const merchant = decodeTokenAndGetMerchant(evt.target.value)
      setClientMerchantAccount(merchant)
      // Dispatch the client token to the Redux store
      // This will trigger the useClientConfig hook to fetch the client config
      // and update the state accordingly
      store.dispatch(tokensSlice.actions.setClient(evt.target.value))
    }
    if (bearerTokenType === BearerToken.SERVER_TOKEN) {
      const merchant = decodeTokenAndGetMerchant(evt.target.value)
      setServerMerchantAccount(merchant)
      store.dispatch(tokensSlice.actions.setServer(evt.target.value))
    }
  }

  return (
    <div className="mb-8">
      <label className="text-bridge-teal-800 mb-2 block font-medium">
        {title}
      </label>
      {subTitle && (
        <span className="mb-4 text-sm text-slate-500">{subTitle}</span>
      )}
      <textarea
        className="h-28 w-full resize-none rounded-md border border-gray-300 p-3 font-mono text-sm"
        placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        name={bearerTokenType}
        id={`textbox_${bearerTokenType}`}
        onBlur={handleBearerToken}
      ></textarea>
      <span className="mb-4 text-sm text-slate-500">
        JWT is for: {showMerchantAccount()}
      </span>
    </div>
  )
}
