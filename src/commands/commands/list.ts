import { Args, Command, Flags } from '@oclif/core'
import axios from 'axios';

export default class CommandsList extends Command {

  static description = 'list your commands'

  public async run(): Promise<void> {
    try {
      const apiKey = process.env.AIR_API_KEY;
      const authHeader = { 'air-api-key': apiKey};
      const response = await axios.get('https://api.airbotics.io/commands', { 'headers': authHeader })
      this.log(response.data);
    } catch (e) {
      this.log('unable to get a list of robots');
      this.log(e as string)
      this.exit(1);
    }
  }

}