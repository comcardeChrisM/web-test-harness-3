import { useSelector } from 'react-redux'

import { RootState } from '@/state'

export default function PaymentsContainer() {
  const clientBearerToken: string | null = useSelector(
    (state: RootState) => state.tokens.client
  )

  return (
    <div>
      <h3>PAYMENTS Placeholder</h3>
      <p>CLIENT: {clientBearerToken}</p>
    </div>
  )
}
