import { test_dest } from 'segment-sloth'
import { dest_payload } from './payload'

const settings: FunctionSettings = {
  writeKey: 'REPLACE ME',
  trait: 'REPLACE ME'
}

test_dest(dest_payload, settings, 3001).then(() => {
}).catch(e =>{
  console.error(e)
})