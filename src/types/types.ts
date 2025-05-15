export type Room = {
    id: string,
    players: [User],
    isFree: boolean
}

export type User = {
    id: string,
    name: string,
    pass: string
}

export type Coord = {
    x: number,
    y: number
}