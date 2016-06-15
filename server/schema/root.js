export const root = `

type Query {
  user(id: String!): User
}

schema {
  query: Query,
  mutation: Mutation
}

`

export default root
