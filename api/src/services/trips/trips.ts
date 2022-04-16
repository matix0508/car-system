import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const trips = () => {
  return db.trip.findMany()
}

export const trip = ({ id }: Prisma.TripWhereUniqueInput) => {
  return db.trip.findUnique({
    where: { id },
  })
}

interface CreateTripArgs {
  input: Prisma.TripCreateInput
}

export const createTrip = ({ input }: CreateTripArgs) => {
  return db.trip.create({
    data: input,
  })
}

interface UpdateTripArgs extends Prisma.TripWhereUniqueInput {
  input: Prisma.TripUpdateInput
}

export const updateTrip = ({ id, input }: UpdateTripArgs) => {
  return db.trip.update({
    data: input,
    where: { id },
  })
}

export const deleteTrip = ({ id }: Prisma.TripWhereUniqueInput) => {
  return db.trip.delete({
    where: { id },
  })
}

export const Trip = {
  users: (_obj, { root }: ResolverArgs<ReturnType<typeof trip>>) =>
    db.trip.findUnique({ where: { id: root.id } }).users(),
}
