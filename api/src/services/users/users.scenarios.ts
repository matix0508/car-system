import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { name: 'String', hashedPassword: 'String' } },
    two: { data: { name: 'String', hashedPassword: 'String' } },
  },
})

export type StandardScenario = typeof standard
