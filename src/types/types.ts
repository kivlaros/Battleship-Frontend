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

export type AuthData = {
    type: string,
    data:
        {
            name: string,
            password: string,
        },
    id: string|null,
}