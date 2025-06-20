import { useState } from 'react'
import { useSelector } from 'react-redux'

import PaymentTabs from '@/components/basic/paymenttabs'
import { RootState } from '@/state'

export default function PaymentsContainer() {
  const [setUpComplete, setSetupComplete] = useState(false)

  const clientConfiguration: object | null = useSelector(
    (state: RootState) => state.clientConfiguration.config
  )

  return (
    <div className="">
      <PaymentTabs />
      <pre>{JSON.stringify(clientConfiguration)}</pre>
      {(!setUpComplete && <p>Configuring your payment options!</p>) || (
        <p>SETUP COMPLETE</p>
      )}
      <div>
        <p>This is a placeholder for the payment options.</p>
      </div>
    </div>
  )
}
