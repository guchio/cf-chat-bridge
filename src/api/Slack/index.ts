import * as request from "request-promise";
import * as Slack from "../../types/Slack";

export default class API {
  private static baseURL: string = "https://slack.com/api";
  private accessToken: string;
  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }
  /**
   * https://api.slack.com/methods/chat.postMessage
   */
  public postMessage(message: Slack.Event): Promise<any> {
    const uri = `${API.baseURL}/chat.postMessage`;
    return request.post(uri, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      json: message,
    });
  }

  public getChannelInfo(id: string): Promise<Slack.Channel> {
    const uri = `${API.baseURL}/channels.info`;
    const query = `token=${this.accessToken}&channel=${id}`;
    return request.get(uri + "?" + query).then(res => {
      const body = JSON.parse(res);
      return body.ok ? Promise.resolve(body.channel as Slack.Channel) : Promise.reject({msg: "Slack API failed", res});
    });
  }
}
