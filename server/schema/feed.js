export const feed = `

type Task {
  description: String
  uuid: String
  randomString: String
}

type OldTask {
  due: String
  description: String
  uuid: String
  randomString: String
}

type Query {
  feed(description: String): [Task]
  oldfeed(limit: Int=1, description: String, dueafter: String): [OldTask]
  user(id: String!): User
}

`;

export default feed
