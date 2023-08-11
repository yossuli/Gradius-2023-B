import type { BulletModel } from '$/commonTypesWithClient/models';
import { bulletIdParser, userIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Bullet } from '@prisma/client';
import { z } from 'zod';

const toBulletModel = (prismaBullet: Bullet): BulletModel => ({
  id: bulletIdParser.parse(prismaBullet.id),
  createdPosition: z
    .object({
      x: z.number().min(0),
      y: z.number().min(0),
    })
    .parse(prismaBullet.createdPosition),
  direction: z.number().min(0).max(360).parse(prismaBullet.direction),
  type: z.number().min(0).parse(prismaBullet.type),
  playerId: prismaBullet.playerId === null ? undefined : userIdParser.parse(prismaBullet.playerId),
  createdAt: prismaBullet.createdAt.getTime(),
});

let change = 2;

const statuses = [false, false, true];

export const bulletsRepository = {
  findAll: async (): Promise<{ body: BulletModel[]; change: boolean }> => {
    const status = statuses[change];
    change = change === 1 ? 2 : 0;
    const prismaBullets = await prismaClient.bullet.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return { body: prismaBullets.map(toBulletModel), change: status };
  },
  find: async (id: string): Promise<{ body: BulletModel; change: boolean } | null> => {
    const status = statuses[change];
    change = change === 1 ? 2 : 0;
    const prismaBullet = await prismaClient.bullet.findUnique({ where: { id } });
    return prismaBullet !== null ? { body: toBulletModel(prismaBullet), change: status } : null;
  },
  delete: async (id: string): Promise<void> => {
    try {
      await prismaClient.bullet.delete({ where: { id } }).then(() => (change = 1));
      console.log('success delete');
    } catch (error) {
      console.log(error);
    }
  },
  create: async (bullet: BulletModel) => {
    await prismaClient.bullet
      .create({
        data: {
          id: bullet.id,
          createdPosition: bullet.createdPosition,
          direction: bullet.direction,
          type: bullet.type,
          playerId: bullet.playerId,
          createdAt: new Date(bullet.createdAt),
        },
      })
      .then(() => (change = 1));
  },
};
