import React from 'react';
// import DataComposer from '../composers/TasksCollection.jsx';

export default ({collection}) => (
  <div>
    <h3>Tasks collection</h3>
    <ul>
      {collection.map(record => (
        <li key={record._id}>
          <a href={`/tasks/${record._id}`}>{record.title}</a>
        </li>
      ))}
    </ul>
  </div>
);
