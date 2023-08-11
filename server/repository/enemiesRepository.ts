import type { EnemyModel } from '$/commonTypesWithClient/models';
import { enemyIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Enemy } from '@prisma/client';
import { z } from 'zod';

const toEnemyModel = (prismaEnemy: Enemy): EnemyModel => ({
  id: enemyIdParser.parse(prismaEnemy.id),
  createdPosition: z
    .object({
      x: z.number().min(0),
      y: z.number().min(0),
    })
    .parse(prismaEnemy.createdPosition),
  type: z.number().min(0).parse(prismaEnemy.type),
  createdAt: prismaEnemy.createdAt.getTime(),
});

let change = 2;

const statuses = [false, false, true];

export const enemiesRepository = {
  create: async (enemy: EnemyModel): Promise<EnemyModel> => {
    change = 1;
    const prismaEnemy = await prismaClient.enemy
      .create({
        data: {
          id: enemy.id,
          createdPosition: enemy.createdPosition,
          type: enemy.type,
          createdAt: new Date(enemy.createdAt),
        },
      })
      .then((enemy) => {
        change = 1;
        return enemy;
      });
    return toEnemyModel(prismaEnemy);
  },
  findAll: async (): Promise<{ body: EnemyModel[]; change: boolean }> => {
    const status = statuses[change];
    change = change === 1 ? 2 : 0;
    const prismaEnemies = await prismaClient.enemy.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return { body: prismaEnemies.map(toEnemyModel), change: status };
  },
  find: async (id: string): Promise<{ body: EnemyModel; change: boolean } | null> => {
    const status = statuses[change];
    change = change === 1 ? 2 : 0;
    const prismaEnemy = await prismaClient.enemy.findUnique({ where: { id } });
    return prismaEnemy !== null ? { body: toEnemyModel(prismaEnemy), change: status } : null;
  },
  delete: async (id: string): Promise<void> => {
    change = 1;
    await prismaClient.enemy.delete({ where: { id } }).then(() => (change = 1));
  },
};
