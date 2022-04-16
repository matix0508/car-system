import TripsOnUsersCell from 'src/components/TripsOnUsers/TripsOnUsersCell'

type TripsOnUsersPageProps = {
  id: number
}

const TripsOnUsersPage = ({ id }: TripsOnUsersPageProps) => {
  return <TripsOnUsersCell id={id} />
}

export default TripsOnUsersPage
