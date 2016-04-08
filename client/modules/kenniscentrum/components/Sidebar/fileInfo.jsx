import React from 'react'
import MDFile from 'react-icons/lib/md/insert-drive-file'
import MDDate from 'react-icons/lib/md/date-range'
import MDFace from 'react-icons/lib/md/face'
import TimeAgo from 'react-timeago'

const FileInfo = ({name, createdAt }) => (
    <div className="fileinfo--container mtl f3 black-60">
      <div className="fileinfo--header pbs w-100 f5 mls ttu tracked">
        bestandsinfo
      </div>
      <br/>
      <div className="fileinfo mbm fileinfo--title mls f5">
       <MDFile/> { name }
      </div>
      <div className="fileinfo mbm fileinfo--title mls f5">
        <MDDate/> <TimeAgo date={createdAt}/>
      </div>
      <div className="fileinfo fileinfo--title mls f5">
        <MDFace/> Jon Do
      </div>
      <div className="fileinfo--download-container mtm f5">
        <div className="fileinfo ba-m mtm pts-l pbs-l ttu prm-l plm-l fileinfo--download">
          download bestand
        </div>
      </div>
    </div>
)
export default FileInfo