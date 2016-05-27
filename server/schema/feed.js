export const feed = `

type RootQuery {
  _id: String
  created: String
  username: String
  entry: String
  status: String
  due: String
  type: String
  description: String
  uuid: String
  project: String
  context: String
  super: String
  workflow: String
  firstfield: String
  secondfield: String
}

type MetaQuery {
  count: String
  subtotal: String
  errors: [String]!
  return: [RootQuery]
}

type MetaMutate {
  collection: String
  op: String
  selector: String
  count: String
  in: String
  out: String
  mutator: String
  errors: [String]!
  return: [RootQuery]!
}

type BacklogTask {
  due: String
  description: String
  uuid: String
}

type Query {
  query(collection: String="tmpmutation", selector: String, limit: Int=0, skip: Int=0, duebefore: String, dueafter: String): MetaQuery
  user(id: String!): User
}

type Mutation {
  mutate(collection: String, op: String, selector: String, mutator: String): MetaMutate
}

`;

export default feed
