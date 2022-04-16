import type { EditTripsOnUsersById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import TripsOnUsersForm from 'src/components/TripsOnUsers/TripsOnUsersForm'

export const QUERY = gql`
  query EditTripsOnUsersById($id: Int!) {
    tripsOnUsers: tripsOnUsers(id: $id) {
      id
      userId
      tripId
    }
  }
`
const UPDATE_TRIPS_ON_USERS_MUTATION = gql`
  mutation UpdateTripsOnUsersMutation($id: Int!, $input: UpdateTripsOnUsersInput!) {
    updateTripsOnUsers(id: $id, input: $input) {
      id
      userId
      tripId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tripsOnUsers }: CellSuccessProps<EditTripsOnUsersById>) => {
  const [updateTripsOnUsers, { loading, error }] = useMutation(UPDATE_TRIPS_ON_USERS_MUTATION, {
    onCompleted: () => {
      toast.success('TripsOnUsers updated')
      navigate(routes.tripsOnUserses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId), tripId: parseInt(input.tripId), })
    updateTripsOnUsers({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit TripsOnUsers {tripsOnUsers.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TripsOnUsersForm tripsOnUsers={tripsOnUsers} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
