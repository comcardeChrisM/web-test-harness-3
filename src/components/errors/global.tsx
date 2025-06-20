import { useSelector } from 'react-redux'

import { RootState } from '@/state'
import { GlobalError } from '@/types/general'

export default function GlobalErrors() {
  const displayErrorState: GlobalError | null = useSelector(
    (state: RootState) => state.errors.globalError
  )

  return (
    <>
      {(displayErrorState && (
        <div className="h-16 overflow-x-hidden overflow-y-auto rounded-sm border border-red-500 p-1 text-xs">
          <p>Message: {displayErrorState?.message}</p>
          <p>Name: {displayErrorState?.name}</p>
          <p>
            Stack Trace: <pre>{displayErrorState?.stack}</pre>
          </p>
        </div>
      )) || (
        <div className="h-16 overflow-x-hidden overflow-y-auto rounded-sm border border-green-500 p-1 text-xs">
          <p>Everything is fine!</p>
        </div>
      )}
    </>
  )
}
