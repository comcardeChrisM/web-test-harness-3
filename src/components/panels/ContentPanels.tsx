import { JSX } from 'react'

export interface ContentPanelsProps {
  children: JSX.Element
  title: string
  description: string
}

export default function ContentPanels({
  children,
  title,
  description,
}: ContentPanelsProps) {
  return (
    <div className="border-bridge-teal-200 overflow-hidden rounded-lg border shadow-lg">
      <div className="gradient-teal p-6 text-white">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-slate-300">{description}</p>
      </div>
      <div className="space-y-4 px-4 py-6">{children}</div>
    </div>
  )
}
