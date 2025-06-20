import { useState } from 'react'

import { store } from '@/state'
import { tokensSlice } from '@/state/reducers/tokens'
import { BearerToken, BearerTokenTitle } from '@/types/general'

export interface HeaderProps {
  type: BearerToken
  title: BearerTokenTitle
  subTitle?: string
}
export default function BearerTokens({ type, title, subTitle }: HeaderProps) {
  const [bearerTokenType] = useState<BearerToken>(type)

  const handleBearerToken = (evt: any) => {
    if (bearerTokenType === BearerToken.CLIENT_TOKEN) {
      store.dispatch(tokensSlice.actions.setClient(evt.target.value))
    }
    if (bearerTokenType === BearerToken.SERVER_TOKEN) {
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
    </div>
  )
}
