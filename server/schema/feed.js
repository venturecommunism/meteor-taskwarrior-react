
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
  contextonlynotsomedaymaybe: Int
  projectonly: Int
  somedaymaybeproj: Int
  somedaymaybecont: Int
  somedaymaybeprojproject: Int
  somedaymaybecontcontext: Int
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

type NewCount {
  total: Int
  projects: Int
  projectonly: Int
  contexts: Int
  contextonly: Int
  hardlandscape: Int
  notaprojectorcontext: Int
  nouuid: Int
}

type Query {
  feed(limit: Int=1, description: String): [Task]
  oldfeed(limit: Int=1, skip: Int=0, description: String, duebefore: String, dueafter: String): [OldTask]
  backlogfeed(limit: Int=1, description: String, duebefore: String): [BacklogTask]
  count(collection: String="taskspending"): Count
  newcount(collection: String="tasks"): NewCount
  user(id: String!): User
}

`;

export default feed