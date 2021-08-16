import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OserviceService {
  clientID = "ylWGTPcoG4PkfUTypQNmWQXbrXH70EKS";
  secretID = "MKHXFzwiDsXoojXB";
  authorizationHeader = "Basic eWxXR1RQY29HNFBrZlVUeXBRTm1XUVhiclhINzBFS1M6TUtIWEZ6d2lEc1hvb2pYQg==";
  url = "https://api.orange.com/oauth/v3/token";
  postData = "grant_type=client_credentials";

  constructor(
    private httpClient: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.authorizationHeader,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    })
  };

  getToken(): Observable<any> {
    return this.httpClient.post<any>(this.url, this.postData, this.httpOptions)
  }

}
