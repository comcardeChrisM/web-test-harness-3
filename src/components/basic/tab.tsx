import { ApplePaySVG } from '@/components/icons/ApplePay'
import { GooglePaySVG } from '@/components/icons/GooglePay'
import { PayPalSVG } from '@/components/icons/PayPal'
import { PaymentWallets } from '@/types/general'

interface TabProps {
  onClick?: () => void
  text: string
  active: boolean
  icon?: React.ReactNode | string
}

export default function Tab({ text, active, icon }: TabProps) {
  const determineCardIcon = (icon: React.ReactNode | string) => {
    if (typeof icon === 'string') {
      if (icon === PaymentWallets.APPLE_PAY) {
        return <ApplePaySVG />
      }
      if (icon === PaymentWallets.GOOGLE_PAY) {
        return <GooglePaySVG />
      }
      if (icon === PaymentWallets.PAY_PAL) {
        return <PayPalSVG />
      }
      return <span className={`icon-${icon}`}>{icon}</span>
    }
    return icon
  }

  return (
    <button
      className={`bg-bridge-teal-100 grid grid-cols-[1.5em_1fr] content-center items-center gap-0.5 rounded-sm px-1.25 py-1 ${active ? 'bg-white' : ''}`}
    >
      {determineCardIcon(icon)}
      {text}
    </button>
  )
}
