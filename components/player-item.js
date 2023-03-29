const PlayerItem = ({ player, handleDelete }) => {
  return (
    <div>
      <span>{player.id}</span>
      <h3>{player.name}</h3>
      <p>{player.country}</p>
      <button onClick={() => handleDelete(player.id)}>Delete Player</button>
      <hr />
    </div>
  );
};

export default PlayerItem;
