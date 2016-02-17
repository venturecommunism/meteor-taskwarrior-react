import {Tasks} from '/lib/feed';

export default function () {
  if (!Tasks.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const description = `This is the task description: ${lc}`;
      Tasks.insert({description});
    }
  }
}
