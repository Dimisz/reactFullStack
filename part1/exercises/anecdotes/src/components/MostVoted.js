const MostVoted = ({ numVotes, text }) => {
  return(
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{text}</p>
      <p>has {numVotes} votes</p>
    </div> 
  );
}

export default MostVoted;