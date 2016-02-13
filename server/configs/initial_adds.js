import {Posts} from '/lib/collections';

export default function () {
  if (!Posts.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const description = `This is the post description: ${lc}`;
      Posts.insert({description});
    }
  }
}
