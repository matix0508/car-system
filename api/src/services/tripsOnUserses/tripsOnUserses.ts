import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const tripsOnUserses = () => {
  return db.tripsOnUsers.findMany()
}

export const tripsOnUsers = ({ id }: Prisma.TripsOnUsersWhereUniqueInput) => {
  return db.tripsOnUsers.findUnique({
    where: { id },
  })
}

interface CreateTripsOnUsersArgs {
  input: Prisma.TripsOnUsersCreateInput
}

export const createTripsOnUsers = ({ input }: CreateTripsOnUsersArgs) => {
  return db.tripsOnUsers.create({
    data: input,
  })
}

interface UpdateTripsOnUsersArgs extends Prisma.TripsOnUsersWhereUniqueInput {
  input: Prisma.TripsOnUsersUpdateInput
}

export const updateTripsOnUsers = ({ id, input }: UpdateTripsOnUsersArgs) => {
  return db.tripsOnUsers.update({
    data: input,
    where: { id },
  })
}

export const deleteTripsOnUsers = ({
  id,
}: Prisma.TripsOnUsersWhereUniqueInput) => {
  return db.tripsOnUsers.delete({
    where: { id },
  })
}

export const TripsOnUsers = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof tripsOnUsers>>) =>
    db.tripsOnUsers.findUnique({ where: { id: root.id } }).user(),
  trip: (_obj, { root }: ResolverArgs<ReturnType<typeof tripsOnUsers>>) =>
    db.tripsOnUsers.findUnique({ where: { id: root.id } }).trip(),
}
