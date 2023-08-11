import type { BulletModel } from '$/commonTypesWithClient/models';

export type Methods = {
  get: {
    query: {
      display: number;
    };
    resBody: { body: BulletModel[]; change: boolean };
  };
  post: {
    resBody: BulletModel | null;
  };
};
