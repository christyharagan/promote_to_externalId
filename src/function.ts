const A = 'a'.charCodeAt(0)
function create_message_id() {
  let message_id = 'dg-'
  for (let i = 0; i < 32; i++) {
    let r = Math.round(Math.random() * 15)
    message_id += r > 9 ? String.fromCharCode(A + r - 10) : r
  }
  return message_id
}

export async function onIdentify(event: SegmentIdentifyEvent, settings: FunctionSettings) {
  if (event.traits[settings.trait] !== undefined) {
    const body = {
      context: {
        externalIds: (event.context && event.context.externalIds ? event.context.externalIds : []).concat([{
          collection: 'users',
          encoding: 'none',
          id: '' + event.traits[settings.trait],
          type: settings.trait
        }])
      },
      traits: {},
      timestamp: new Date().toISOString(),
      messageId: create_message_id(),
      type: 'identify',
      writeKey: settings.writeKey
    } as SegmentIdentifyEvent

    if (event.userId) {
      body.userId = event.userId
    }
    if (event.anonymousId) {
      body.anonymousId = event.anonymousId
    }

    await fetch('https://api.segment.io/v1/i', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(e => {
      e.text().then(t=>{
        console.log(t)
      })
    }).catch(e => {
      console.error(e)
    })
  }
}