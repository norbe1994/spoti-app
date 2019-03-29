import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAHrpDdAkaLdAp3e1Am8-ggtNmWkLQ_97AmlmYvTL9eWEETqF53xm3UPLhPwyQAgmiUvqBg2w54Z8vOtxE',
    })

    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe(data => {
        console.log(data)
      })
  }
}
