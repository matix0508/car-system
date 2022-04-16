import type { FindTripsOnUserses } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import TripsOnUserses from 'src/components/TripsOnUsers/TripsOnUserses'

export const QUERY = gql`
  query FindTripsOnUserses {
    tripsOnUserses {
      id
      userId
      tripId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tripsOnUserses yet. '}
      <Link
        to={routes.newTripsOnUsers()}
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

export const Success = ({ tripsOnUserses }: CellSuccessProps<FindTripsOnUserses>) => {
  return <TripsOnUserses tripsOnUserses={tripsOnUserses} />
}
