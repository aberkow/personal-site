import React from 'react';

import PostTags from './postTags';
import PostPagination from './postPagination';
import PhotoCredit from './postPhotoCredit';

const PostMetaContent = (props) => (
  
  <div>
    <PostPagination next={props.next} prev={props.prev} />
    {
      props.tagReferenceGroup && <PostTags tags={props.tagReferenceGroup} />
    }
    <PhotoCredit link={props.imageCreditLink} name={props.imageCredit} />
  </div>
)

export default PostMetaContent;