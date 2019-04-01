import { Component, OnInit } from '@angular/core'
import { SpotifyService } from 'src/app/services/spotify.service'

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styles: [],
})
export class SearchComponent implements OnInit {
	artistas: any[] = []
	loading: boolean
	error: boolean
	mensajeError: string

	constructor(private spotify: SpotifyService) {}

	ngOnInit() {
		this.loading = true
		this.spotify.getNewReleases().subscribe(
			(data: any) => {
				this.artistas = data
				this.loading = false
			},
			error => {
				this.loading = false
				this.error = true
				this.mensajeError = error.error.error.message
			},
		)
	}

	buscar(termino: string) {
		this.loading = true
		this.spotify.getArtistas(termino).subscribe(
			(data: any) => {
				this.artistas = data
				this.loading = false
			},
			error => {
				this.loading = false
				this.error = true
				this.mensajeError = error.error.error.message
			},
		)
	}
}
