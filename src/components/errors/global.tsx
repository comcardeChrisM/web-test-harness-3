import { useSelector } from 'react-redux'

import { RootState } from '@/state'

export default function GlobalErrors() {
  const displayErrorState = useSelector(
    (state: RootState) => state.errors.globalError
  )

  console.log(displayErrorState)

  return (
    <>
      {(displayErrorState && (
        <>
          <div className="border border-red-500">
            <pre>{displayErrorState.toString()}</pre>
          </div>
        </>
      )) || <p>Everything is golden</p>}
    </>
  )
}
