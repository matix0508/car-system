import { trips, trip, createTrip, updateTrip, deleteTrip } from './trips'
import type { StandardScenario } from './trips.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('trips', () => {
  scenario('returns all trips', async (scenario: StandardScenario) => {
    const result = await trips()

    expect(result.length).toEqual(Object.keys(scenario.trip).length)
  })

  scenario('returns a single trip', async (scenario: StandardScenario) => {
    const result = await trip({ id: scenario.trip.one.id })

    expect(result).toEqual(scenario.trip.one)
  })

  scenario('creates a trip', async () => {
    const result = await createTrip({
      input: {
        name: 'String',
        distance: 3132194.2133244975,
        date: '2022-04-16T18:51:29Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.distance).toEqual(3132194.2133244975)
    expect(result.date).toEqual('2022-04-16T18:51:29Z')
  })

  scenario('updates a trip', async (scenario: StandardScenario) => {
    const original = await trip({ id: scenario.trip.one.id })
    const result = await updateTrip({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a trip', async (scenario: StandardScenario) => {
    const original = await deleteTrip({ id: scenario.trip.one.id })
    const result = await trip({ id: original.id })

    expect(result).toEqual(null)
  })
})
