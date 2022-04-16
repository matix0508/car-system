import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TRIPS_ON_USERS_MUTATION = gql`
  mutation DeleteTripsOnUsersMutation($id: Int!) {
    deleteTripsOnUsers(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const TripsOnUsers = ({ tripsOnUsers }) => {
  const [deleteTripsOnUsers] = useMutation(DELETE_TRIPS_ON_USERS_MUTATION, {
    onCompleted: () => {
      toast.success('TripsOnUsers deleted')
      navigate(routes.tripsOnUserses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tripsOnUsers ' + id + '?')) {
      deleteTripsOnUsers({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">TripsOnUsers {tripsOnUsers.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tripsOnUsers.id}</td>
            </tr><tr>
              <th>User id</th>
              <td>{tripsOnUsers.userId}</td>
            </tr><tr>
              <th>Trip id</th>
              <td>{tripsOnUsers.tripId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTripsOnUsers({ id: tripsOnUsers.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tripsOnUsers.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TripsOnUsers
