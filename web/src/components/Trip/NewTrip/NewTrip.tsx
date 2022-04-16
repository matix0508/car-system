import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TripForm from 'src/components/Trip/TripForm'

const CREATE_TRIP_MUTATION = gql`
  mutation CreateTripMutation($input: CreateTripInput!) {
    createTrip(input: $input) {
      id
    }
  }
`

const NewTrip = () => {
  const [createTrip, { loading, error }] = useMutation(CREATE_TRIP_MUTATION, {
    onCompleted: () => {
      toast.success('Trip created')
      navigate(routes.trips())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createTrip({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Trip</h2>
      </header>
      <div className="rw-segment-main">
        <TripForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTrip
