import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
	providedIn: 'root',
})
export class SpotifyService {
	constructor(private http: HttpClient) {}

	getQuery(query: string) {
		const url = `https://api.spotify.com/v1/${query}`
		const headers = new HttpHeaders({
			Authorization: 'Bearer BQAvS_Z9yh0jIaZCL1u4OrAfwP22KjR27-Ke5juMNFJvKN9yo5-MyiQkZhY3n4j3SfsjtAAUbNjoT5h-7D0',
		})

		return this.http.get(url, { headers })
	}

	getNewReleases() {
		return this.getQuery('browse/new-releases?limit=30').pipe(map(data => data['albums'].items))
	}

	getArtista(termino: string) {
		return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items))
	}
}
