const PlayerItem = ({ player }) => {
  const handleDelete = async (id) => {
    const res = await fetch(`/api/players/${id}`);
  };
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
