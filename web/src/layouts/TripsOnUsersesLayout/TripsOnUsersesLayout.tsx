import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type TripsOnUsersLayoutProps = {
  children: React.ReactNode
}

const TripsOnUsersesLayout = ({ children }: TripsOnUsersLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.tripsOnUserses()}
            className="rw-link"
          >
            TripsOnUserses
          </Link>
        </h1>
        <Link
          to={routes.newTripsOnUsers()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New TripsOnUsers
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default TripsOnUsersesLayout
