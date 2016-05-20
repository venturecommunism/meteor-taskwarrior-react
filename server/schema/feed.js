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

type Count {
  total: Int
  projects: Int
  contexts: Int
  bothcontextandproject: Int
  contextonly: Int
  projectonly: Int
  noprojectorcontext: Int
  hardlandscape: Int
  hardlandscapenoprojectorcontext: Int
  hardlandscapeprojectonly: Int
  hardlandscapecontextonly: Int
  hardlandscapebothprojectandcontext: Int
  nouuid: Int
  nouuidorprojectorcontext: Int
  nouuidprojectonly: Int
  nouuidcontextonly: Int
}

type Query {
  feed(limit: Int=1, description: String): [Task]
  oldfeed(limit: Int=1, description: String, duebefore: String, dueafter: String): [OldTask]
  backlogfeed(limit: Int=1, description: String, duebefore: String): [BacklogTask]
  count(collection: String!): Count
  user(id: String!): User
}

`;

export default feed
