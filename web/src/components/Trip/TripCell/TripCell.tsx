import type { FindTripById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Trip from 'src/components/Trip/Trip'

export const QUERY = gql`
  query FindTripById($id: Int!) {
    trip: trip(id: $id) {
      id
      name
      distance
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Trip not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ trip }: CellSuccessProps<FindTripById>) => {
  return <Trip trip={trip} />
}
