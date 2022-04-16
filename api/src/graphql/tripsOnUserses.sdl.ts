export const schema = gql`
  type TripsOnUsers {
    id: Int!
    user: User!
    userId: Int!
    trip: Trip!
    tripId: Int!
  }

  type Query {
    tripsOnUserses: [TripsOnUsers!]! @requireAuth
    tripsOnUsers(id: Int!): TripsOnUsers @requireAuth
  }

  input CreateTripsOnUsersInput {
    userId: Int!
    tripId: Int!
  }

  input UpdateTripsOnUsersInput {
    userId: Int
    tripId: Int
  }

  type Mutation {
    createTripsOnUsers(input: CreateTripsOnUsersInput!): TripsOnUsers!
      @requireAuth
    updateTripsOnUsers(
      id: Int!
      input: UpdateTripsOnUsersInput!
    ): TripsOnUsers! @requireAuth
    deleteTripsOnUsers(id: Int!): TripsOnUsers! @requireAuth
  }
`
