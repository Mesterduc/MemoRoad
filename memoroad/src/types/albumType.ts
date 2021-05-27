interface Album{
    id: number,
    title: string,
    cities: Array<string>,
    dateStart?: Date,
    dateEnd?: Date
    countries: Array<string>,
    continents: Array<string>
}

export default Album