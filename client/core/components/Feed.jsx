import ParamsExample from '../../modules/params/ParamsExample.jsx'
import CreatePost from './CreatePost.jsx'
import TrendingPosts from '../../modules/trendingposts/TrendingPosts.jsx'

const Layout = ({content = () => null }) => (
  <div class="feed">
    <div class="container">

      <div class="col-25">
        <ParamsExample />
      </div>

      <div class="col-50">
        <CreatePost />
        {content()}
      </div>

      <div class="col-25">
        <TrendingPosts />
      </div>

    </div>
  </div>
)

export default Layout
