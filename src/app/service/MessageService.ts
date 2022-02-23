import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TradeMessageRequest} from "../interfaces/TradeMessage";

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {
  }

  public processMessage(request: TradeMessageRequest) {
    return this.http.post("http://localhost:8080/message", request);
  }

  public fetchTradeMessageHistory(userId: string) {
    return this.http.get("http://localhost:8080/fetchTradeMessageHistory/" + userId);
  }
}
