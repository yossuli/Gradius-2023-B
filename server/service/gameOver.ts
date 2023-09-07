import type { PlayerModel } from '$/commonTypesWithClient/models';
import { playersRepository } from '$/repository/playersRepository';

export const gameOver = async (player: PlayerModel): Promise<void> => {
  if (player.health <= 0) {
    const newScore = player.score - 5 >= 0 ? player.score - 5 : 0; // 仮でスコアが0以下にならないように
    playersRepository.save2(player.id, 0, newScore);
  } else {
    playersRepository.save2(player.id, player.health - 1, player.score);
  }
};
