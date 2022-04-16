import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TripsOnUsersCreateArgs>({
  tripsOnUsers: {
    one: {
      data: {
        user: { create: { name: 'String', hashedPassword: 'String' } },
        trip: {
          create: {
            name: 'String',
            distance: 4164444.756864323,
            date: '2022-04-16T18:51:15Z',
          },
        },
      },
    },
    two: {
      data: {
        user: { create: { name: 'String', hashedPassword: 'String' } },
        trip: {
          create: {
            name: 'String',
            distance: 1734882.6991101252,
            date: '2022-04-16T18:51:15Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
