import PlayerItem from "@/components/player-item";
import { players } from "@/data/players";

const Players = () => {
  return (
    <div>
      <h2>Players</h2>

      {players?.map((player) => (
        <PlayerItem key={player.id} player={player} />
      ))}
    </div>
  );
};

export default Players;
