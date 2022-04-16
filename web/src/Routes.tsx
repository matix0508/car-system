// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import TripsLayout from 'src/layouts/TripsLayout'
import TripsOnUsersesLayout from 'src/layouts/TripsOnUsersesLayout'

import UsersLayout from 'src/layouts/UsersLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={TripsLayout}>
        <Route path="/trips/new" page={TripNewTripPage} name="newTrip" />
        <Route path="/trips/{id:Int}/edit" page={TripEditTripPage} name="editTrip" />
        <Route path="/trips/{id:Int}" page={TripTripPage} name="trip" />
        <Route path="/trips" page={TripTripsPage} name="trips" />
      </Set>
      <Set wrap={TripsOnUsersesLayout}>
        <Route path="/trips-on-userses/new" page={TripsOnUsersNewTripsOnUsersPage} name="newTripsOnUsers" />
        <Route path="/trips-on-userses/{id:Int}/edit" page={TripsOnUsersEditTripsOnUsersPage} name="editTripsOnUsers" />
        <Route path="/trips-on-userses/{id:Int}" page={TripsOnUsersTripsOnUsersPage} name="tripsOnUsers" />
        <Route path="/trips-on-userses" page={TripsOnUsersTripsOnUsersesPage} name="tripsOnUserses" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
