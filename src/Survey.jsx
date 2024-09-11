/* eslint-disable react/prop-types */
export default function Survey({ question, votes, onClick, deleteOnClick }) {
  return (
    <div>
      <h2>{question}</h2>
      <button onClick={onClick}>{votes}</button>
      <button onClick={deleteOnClick}>Borrar</button>
    </div>
  );
}
