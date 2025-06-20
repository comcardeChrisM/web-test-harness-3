import { useSelector } from 'react-redux'

import { CreditCard } from 'lucide-react'

import Tab from '@/components/basic/tab'
import { RootState } from '@/state'
import { ClientConfigResponse, PaymentTabWallets } from '@/types/general'

export default function PaymentTabs() {
  const digitalWallets = useSelector((state: RootState) => {
    const wallets = (state.clientConfiguration.config as ClientConfigResponse)
      ?.digitalWallets
    return wallets ? Object.keys(wallets) : []
  })

  const displayDigitalWallets = () => {
    return digitalWallets.map((wallet: string) => {
      return (
        <Tab
          onClick={() => handlePaymentTypeChange(wallet)}
          key={wallet}
          text={PaymentTabWallets[wallet as keyof typeof PaymentTabWallets]}
          active={false}
          icon={wallet}
        />
      )
    })
  }

  const handlePaymentTypeChange = (type: string) => {
    console.debug('Payment type changed to:', type)
  }

  return (
    <div className="bg-bridge-teal-100 rounded px-4 py-2 text-black">
      {digitalWallets.length > 0 && (
        <div className={`grid grid-cols-${digitalWallets.length + 1} gap-2`}>
          <Tab
            onClick={() => handlePaymentTypeChange('card')}
            key="card"
            text="Card"
            active={true}
            icon={<CreditCard />}
          />
          {displayDigitalWallets()}
        </div>
      )}
    </div>
  )
}
