export const feed = `

type Task {
  _id: String
  created: String
  username: String
  entry: String
  status: String
  type: String
  description: String
  uuid: String
  project: String
  context: String
  super: String
  workflow: String
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

type RootQuery {
  firstfield: String
  secondfield: String
}

type Query {
  query(collection: String="tmpmutation", selector: String, limit: String): [RootQuery]
  feed(limit: Int=1, skip: Int=0, _id: String, description: String, type: String, super: String, project: String, context: String, uuid: String): [Task]
  oldfeed(limit: Int=1, skip: Int=0, description: String, duebefore: String, dueafter: String): [OldTask]
  backlogfeed(limit: Int=1, description: String, duebefore: String): [BacklogTask]
  count(collection: String="taskspending"): Count
  newcount(collection: String="tasks"): NewCount
  user(id: String!): User
}

type Mutation {
  mutate(collection: String="tmpmutation", op: String!, selector: String): RootMutate
  feedinsert(firstfield: String, secondfield: String): FeedInsert
  feedupdate(firstfield: String, secondfield: String): FeedUpdate
}

type RootMutate {
  collection: String
  op: String
  selector: String
  count: String
  outpipe: String
  mutator: String
}

type FeedInsert {
  firstfield: String
  secondfield: String
}

type FeedUpdate {
  firstfield: String
  secondfield: String
}

`;

export default feed
