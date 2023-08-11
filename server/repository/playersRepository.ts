import type { UserId } from '$/commonTypesWithClient/branded';
import type { PlayerModel } from '$/commonTypesWithClient/models';
import { userIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Player } from '@prisma/client';
import { z } from 'zod';

const toPlayerModel = (prismaPlayer: Player): PlayerModel => ({
  id: userIdParser.parse(prismaPlayer.id),
  name: prismaPlayer.name,
  position: z
    .object({
      x: z.number().min(0),
      y: z.number().min(0),
    })
    .parse(prismaPlayer.position),
  health: z.number().min(0).max(100).parse(prismaPlayer.health),
  score: z.number().min(0).parse(prismaPlayer.score),
  team: z.enum(['red', 'blue']).parse(prismaPlayer.team),
  createdAt: prismaPlayer.createdAt.getTime(),
});

let change = 2;

const statuses = [false, false, true];

export const playersRepository = {
  save: async (player: PlayerModel): Promise<PlayerModel> => {
    const prismaPlayer = await prismaClient.player
      .upsert({
        where: { id: player.id },
        update: {
          name: player.name,
          position: player.position,
          health: player.health,
          score: player.score,
          team: player.team,
        },
        create: {
          id: player.id,
          name: player.name,
          position: player.position,
          health: player.health,
          score: player.score,
          team: player.team,
          createdAt: new Date(player.createdAt),
        },
      })
      .then((player) => {
        change = 1;
        return player;
      });
    return toPlayerModel(prismaPlayer);
  },
  findAll: async (): Promise<{ body: PlayerModel[]; change: boolean }> => {
    const status = statuses[change];
    change = change === 1 ? 2 : 0;
    const prismaPlayers = await prismaClient.player.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return { body: prismaPlayers.map(toPlayerModel), change: status };
  },
  findAllInTeam: async (team: string): Promise<{ body: PlayerModel[]; change: boolean }> => {
    const status = statuses[change];
    change = change === 1 ? 2 : 0;
    const prismaPlayers = await prismaClient.player.findMany({
      where: { team },
      orderBy: { createdAt: 'desc' },
    });
    return { body: prismaPlayers.map(toPlayerModel), change: status };
  },
  find: async (id: UserId): Promise<PlayerModel | null> => {
    change = change === 1 ? 2 : 0;
    const prismaPlayer = await prismaClient.player.findUnique({ where: { id } });
    return prismaPlayer !== null ? toPlayerModel(prismaPlayer) : null;
  },
  delete: async (id: string): Promise<void> => {
    await prismaClient.player.delete({ where: { id } }).then(() => (change = 1));
  },
};
