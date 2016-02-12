import ParamsExample from '../../modules/params/ParamsExample.jsx'
import CreatePost from './CreatePost.jsx'
import TrendingPosts from '../../modules/trendingposts/TrendingPosts.jsx'
import React from 'react'
import FeedList from './FeedList.jsx'

const Layout = ({posts}) => (
  <div className="feed">
    <div className="container">

      <div className="col-25">
      </div>

      <div className="col-50">
        <FeedList posts={posts} />
      </div>

      <div className="col-25">
      </div>

    </div>
  </div>
)

export default Layout
