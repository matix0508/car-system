export const schema = gql`
  type User {
    id: Int!
    name: String!
    hashedPassword: String!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String!
    hashedPassword: String!
  }

  input UpdateUserInput {
    name: String
    hashedPassword: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
