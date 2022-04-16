import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TripCreateArgs>({
  trip: {
    one: {
      data: {
        name: 'String',
        distance: 1602556.1240625018,
        date: '2022-04-16T18:51:29Z',
      },
    },
    two: {
      data: {
        name: 'String',
        distance: 1597600.4869534655,
        date: '2022-04-16T18:51:29Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
