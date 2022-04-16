import {
  tripsOnUserses,
  tripsOnUsers,
  createTripsOnUsers,
  updateTripsOnUsers,
  deleteTripsOnUsers,
} from './tripsOnUserses'
import type { StandardScenario } from './tripsOnUserses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tripsOnUserses', () => {
  scenario('returns all tripsOnUserses', async (scenario: StandardScenario) => {
    const result = await tripsOnUserses()

    expect(result.length).toEqual(Object.keys(scenario.tripsOnUsers).length)
  })

  scenario(
    'returns a single tripsOnUsers',
    async (scenario: StandardScenario) => {
      const result = await tripsOnUsers({ id: scenario.tripsOnUsers.one.id })

      expect(result).toEqual(scenario.tripsOnUsers.one)
    }
  )

  scenario('creates a tripsOnUsers', async (scenario: StandardScenario) => {
    const result = await createTripsOnUsers({
      input: {
        userId: scenario.tripsOnUsers.two.userId,
        tripId: scenario.tripsOnUsers.two.tripId,
      },
    })

    expect(result.userId).toEqual(scenario.tripsOnUsers.two.userId)
    expect(result.tripId).toEqual(scenario.tripsOnUsers.two.tripId)
  })

  scenario('updates a tripsOnUsers', async (scenario: StandardScenario) => {
    const original = await tripsOnUsers({ id: scenario.tripsOnUsers.one.id })
    const result = await updateTripsOnUsers({
      id: original.id,
      input: { userId: scenario.tripsOnUsers.two.userId },
    })

    expect(result.userId).toEqual(scenario.tripsOnUsers.two.userId)
  })

  scenario('deletes a tripsOnUsers', async (scenario: StandardScenario) => {
    const original = await deleteTripsOnUsers({
      id: scenario.tripsOnUsers.one.id,
    })
    const result = await tripsOnUsers({ id: original.id })

    expect(result).toEqual(null)
  })
})
