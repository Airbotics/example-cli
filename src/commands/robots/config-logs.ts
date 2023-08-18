import { Args, Command, Flags } from '@oclif/core';
import axios from 'axios';

export default class ConfigLogs extends Command {
  
  static description = 'configure logs on a robot';

  static flags = {
    enabled: Flags.string({char: 'e', description: 'enable logs', required: true, options: ['true', 'false']}),
    robot_id: Flags.string({char: 'r', description: 'robot id', required: true})
  }

  public async run(): Promise<void> {

    const { flags}  = await this.parse(ConfigLogs);

    const enabled: boolean = flags.enabled === 'true' ? true: false;
    const robotId: string = flags.robot_id
   
    try {
      const apiKey = process.env.AIR_API_KEY;
      const authHeader = { 'air-api-key': apiKey };
      const url = `https://api.airbotics.io/robots/${robotId}/logs/config`;
      const body = { enabled: enabled };
      const response = await axios.patch(url, body, { 'headers': authHeader });
      this.log(response.data);
    } catch (e) {
      this.log('unable to configure logs for robot');
      this.exit(1);
    }
  }
  
}