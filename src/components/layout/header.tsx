export interface HeaderProps {
  title: string
  subTitle: string
}
export default function Header({ title, subTitle }: HeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="mb-2 text-3xl font-bold text-purple-600">{title}</h1>
      <p className="text-teal-700">{subTitle}</p>
    </div>
  )
}
