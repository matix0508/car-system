import type { EditTripById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import TripForm from 'src/components/Trip/TripForm'

export const QUERY = gql`
  query EditTripById($id: Int!) {
    trip: trip(id: $id) {
      id
      name
      distance
      date
    }
  }
`
const UPDATE_TRIP_MUTATION = gql`
  mutation UpdateTripMutation($id: Int!, $input: UpdateTripInput!) {
    updateTrip(id: $id, input: $input) {
      id
      name
      distance
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ trip }: CellSuccessProps<EditTripById>) => {
  const [updateTrip, { loading, error }] = useMutation(UPDATE_TRIP_MUTATION, {
    onCompleted: () => {
      toast.success('Trip updated')
      navigate(routes.trips())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTrip({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Trip {trip.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TripForm trip={trip} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
