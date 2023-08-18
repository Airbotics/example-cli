import {Hook} from '@oclif/core'

export const hook: Hook<'prerun'> = async function (opts) {
  if(process.env.AIR_API_KEY === undefined) {
    process.stderr.write('AIR_API_KEY was not found\n')
    process.exit(1);
  }
}