
export type LoggedInUser = {
    ids: Ids
    preferences: Preferences
    info: Info
}

export type Ids = {
    id: number
    sessionId: string
}

export type Preferences = {
    interfaceLanguage: string // Type better later
    includeAdult: boolean
}

export type Info = {
    name: string
    username: string
    mugshot: string
    country: string
}

export type Data = {}

export type User = {
    kind: 'loggedIn',
    user: LoggedInUser
    data: Data
} | {
    kind: 'noUser'
}