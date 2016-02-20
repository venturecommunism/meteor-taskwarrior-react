import {tasks} from '/lib/collections';

export default function () {
  if (!tasks.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const description = `This is the task description: ${lc}`;
      tasks.insert({description});
    }
  }
}
