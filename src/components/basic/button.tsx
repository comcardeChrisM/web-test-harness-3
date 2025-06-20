type AppButtonProps = {
  text: string
}

export default function AppButton({ text }: AppButtonProps) {
  return <button className="bg-green-300 px-4 py-2 text-black">{text}</button>
}
