import { Types } from 'mongoose';
import { caching } from '../../config';
import Blog from '../../database/model/Blog';
import { addMillisToCurrentDate } from '../../helpers/utils';
import { DynamicKey, getDynamicKey } from '../keys';
import { getListRange, setList } from '../query';

function getKeyForSimilar(blogId: Types.ObjectId) {
  return getDynamicKey(DynamicKey.BLOGS_SIMILAR, blogId.toHexString());
}

async function saveSimilarBlogs(blogId: Types.ObjectId, blogs: Blog[]) {
  return setList(
    getKeyForSimilar(blogId),
    blogs,
    addMillisToCurrentDate(caching.contentCacheDuration),
  );
}

async function fetchSimilarBlogs(blogId: Types.ObjectId) {
  return getListRange<Blog>(getKeyForSimilar(blogId));
}

export default {
  saveSimilarBlogs,
  fetchSimilarBlogs,
};
