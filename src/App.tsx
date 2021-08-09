import { stat } from 'fs';
import React from 'react';
import { useState } from 'react'
import TodoList from './Todo';
import Head from './head';
import Footter from './footter';
function App() {
  return (
    <div>

     <Head/>
      <div className='mx-auto max-w-4xl'>
     <TodoList></TodoList>
     </div>
      <Footter/>
    </div>
  );
}

export default App;
