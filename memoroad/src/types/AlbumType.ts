interface AlbumType {
	id: number
	title: string
	city: Array<string>
	date: { start: Date; end: Date }
	countries: Array<string>
	continent: Array<string>
}

export default AlbumType
