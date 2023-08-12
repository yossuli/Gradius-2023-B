import type { BulletModel, EnemyModel, PlayerModel } from '$/commonTypesWithClient/models';

type CompareModel = EnemyModel[] | BulletModel[] | PlayerModel[];

export const compare = (current: CompareModel, next: CompareModel) =>
  JSON.stringify(current) === JSON.stringify(next);
