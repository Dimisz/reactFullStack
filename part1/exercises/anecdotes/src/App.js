import { useState } from 'react'

import NextButton from './components/NextButton';
import VoteButton from './components/VoteButton';
import MostVoted from './components/MostVoted';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  
  // const selectNextHandler = () => {
  //   if(selected === anecdotes.length - 1){
  //     setSelected(0);
  //   }
  //   else{
  //     setSelected(selected + 1);
  //   }
  //   console.log(`Set selected to: ${selected}`);
  // }
  const checkTopVoted = () => {
    const maxVotes = Math.max(...points);
    console.log(`max num of votes: ${maxVotes}`);
    const maxIndex = points.indexOf(maxVotes);
    console.log(`index of max: ${maxIndex}`);
    setTopVoted(maxIndex);
  }

  const selectRandomAnecdote = () => {
    const randInt = Math.floor(Math.random() * anecdotes.length);
    //console.log(`Chosen anecdote number ${randInt  + 1} out of ${anecdotes.length} anecdotes`);
    setSelected(randInt);
  }
  
  const upvoteHandler = () => {

   //console.log(`points before vote: ${points}`);
   const cpy = [...points];
   cpy[selected] += 1;
   setPoints(cpy);
   checkTopVoted();

   //console.log(`points after vote: ${points}`);
  //  console.log(anecdotes.length, points.length);
  }
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [topVoted, setTopVoted] = useState(0);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <div>
        <VoteButton clickHandler={upvoteHandler} />
        <NextButton clickHandler={selectRandomAnecdote} />
      </div>
      <MostVoted text={anecdotes[topVoted]} numVotes={points[topVoted]} />
      
    </div>
  )
}
export default App;