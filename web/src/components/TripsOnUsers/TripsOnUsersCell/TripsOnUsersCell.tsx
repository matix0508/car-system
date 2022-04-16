import type { FindTripsOnUsersById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TripsOnUsers from 'src/components/TripsOnUsers/TripsOnUsers'

export const QUERY = gql`
  query FindTripsOnUsersById($id: Int!) {
    tripsOnUsers: tripsOnUsers(id: $id) {
      id
      userId
      tripId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TripsOnUsers not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tripsOnUsers }: CellSuccessProps<FindTripsOnUsersById>) => {
  return <TripsOnUsers tripsOnUsers={tripsOnUsers} />
}
