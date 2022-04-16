export const schema = gql`
  type Trip {
    id: Int!
    name: String!
    distance: Float!
    date: DateTime!
    users: [TripsOnUsers]!
  }

  type Query {
    trips: [Trip!]! @requireAuth
    trip(id: Int!): Trip @requireAuth
  }

  input CreateTripInput {
    name: String!
    distance: Float!
    date: DateTime!
  }

  input UpdateTripInput {
    name: String
    distance: Float
    date: DateTime
  }

  type Mutation {
    createTrip(input: CreateTripInput!): Trip! @requireAuth
    updateTrip(id: Int!, input: UpdateTripInput!): Trip! @requireAuth
    deleteTrip(id: Int!): Trip! @requireAuth
  }
`
