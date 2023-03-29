import { players } from "@/data/players";

export default function handler(req, res) {
  const { playerId } = req.query;

  const player = players.find((player) => player.id === +playerId);

  if (player) {
    res.status(200).json(player);
  }

  if (!player) {
    res.status(404).json({ error: "Player not found" });
  }
}
