const OptionalSettings = {
}
const RequiredSettings = {
  writeKey: {
    description: 'The write key of the source to repeat events into',
    type: string
  },
  trait: {
    description: 'The trait to promote to an externalId',
    type: string
  }
}

validate(OptionalSettings, RequiredSettings)
