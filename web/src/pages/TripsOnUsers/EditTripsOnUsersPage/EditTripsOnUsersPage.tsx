import EditTripsOnUsersCell from 'src/components/TripsOnUsers/EditTripsOnUsersCell'

type TripsOnUsersPageProps = {
  id: number
}

const EditTripsOnUsersPage = ({ id }: TripsOnUsersPageProps) => {
  return <EditTripsOnUsersCell id={id} />
}

export default EditTripsOnUsersPage
