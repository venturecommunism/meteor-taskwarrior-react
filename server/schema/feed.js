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

type BacklogTask {
  due: String
  description: String
  uuid: String
}

type Query {
  feed(limit: Int=1, description: String): [Task]
  oldfeed(limit: Int=1, description: String, duebefore: String, dueafter: String): [OldTask]
  backlogfeed(limit: Int=1, description: String, duebefore: String): [BacklogTask]
  user(id: String!): User
}

`;

export default feed
