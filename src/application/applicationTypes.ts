
export type LoggedInUser = {
    ids: Ids
    prefrences: Preferences
    info: Info
    data: Data 
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
    mughshot: string
    country: string
}

export type Data = {}

export type User = {
    kind: 'loggedIn',
    user: LoggedInUser
} | {
    kind: 'noUser'
}