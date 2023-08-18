import { Args, Command, Flags } from '@oclif/core'
import axios from 'axios';

export default class RobotsList extends Command {

  static description = 'list your robots'

  public async run(): Promise<void> {
    try {
      const apiKey = process.env.AIR_API_KEY;
      const authHeader = { 'air-api-key': apiKey};
      const response = await axios.get('https://api.airbotics.io/robots', { 'headers': authHeader })
      this.log(response.data);
    } catch (e) {
      this.log('unable to get a list of robots');
      this.log(e as string)
      this.exit(1);
    }
  }

}