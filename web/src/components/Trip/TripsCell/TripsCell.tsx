import type { FindTrips } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Trips from 'src/components/Trip/Trips'

export const QUERY = gql`
  query FindTrips {
    trips {
      id
      name
      distance
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No trips yet. '}
      <Link
        to={routes.newTrip()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ trips }: CellSuccessProps<FindTrips>) => {
  return <Trips trips={trips} />
}
