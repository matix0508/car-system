import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TripsOnUsersForm from 'src/components/TripsOnUsers/TripsOnUsersForm'

const CREATE_TRIPS_ON_USERS_MUTATION = gql`
  mutation CreateTripsOnUsersMutation($input: CreateTripsOnUsersInput!) {
    createTripsOnUsers(input: $input) {
      id
    }
  }
`

const NewTripsOnUsers = () => {
  const [createTripsOnUsers, { loading, error }] = useMutation(CREATE_TRIPS_ON_USERS_MUTATION, {
    onCompleted: () => {
      toast.success('TripsOnUsers created')
      navigate(routes.tripsOnUserses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId), tripId: parseInt(input.tripId), })
    createTripsOnUsers({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TripsOnUsers</h2>
      </header>
      <div className="rw-segment-main">
        <TripsOnUsersForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTripsOnUsers
