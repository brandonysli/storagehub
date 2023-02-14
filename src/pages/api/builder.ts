import SchemaBuilder from '@pothos/core';
import { Prisma } from '@prisma/client';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import {NextApiRequest, NextApiResponse} from 'next'

import { prisma } from './prisma'

interface IContext {
  req: NextApiRequest;
  res: NextApiResponse;
}

export const builder = new SchemaBuilder<{
    Context: IContext;
    PrismaTypes: PrismaTypes;
  }>({
    plugins: [PrismaPlugin],
    prisma: {
      client: prisma,
      // Because the prisma client is loaded dynamically, we need to explicitly provide the some information about the prisma schema
      dmmf: Prisma.dmmf,
      // use where clause from prismaRelatedConnection for totalCount (will true by default in next major version)
      filterConnectionTotalCount: true,
    },
  });