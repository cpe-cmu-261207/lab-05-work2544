import { stat } from 'fs';
import React from 'react';
import { useState } from 'react'
import TodoList from './Todo';

function App() {
  return (
    <div>

      {/* header section */}
      <div className='flex justify-center items-end space-x-2'>
        <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
        <span className='text-gray-400 italic my-2 text-xl'>by Latthaphol Laohapiboonrattana 630610759</span>
      </div>
      <div className='mx-auto max-w-4xl'>
     <TodoList></TodoList>
     </div>
      {/* footer section */}
     
      <p className='text-center text-gray-400'>CoppyRight © 2021</p>
    </div>
  );
}

export default App;
