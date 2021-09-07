import { RequesTokenRepsonse, userSessionDataResponse } from './authenticationTypes'
import { LoggedInUser } from '../../application/applicationTypes'

export const parseRequesTokenResponse = (data: RequesTokenRepsonse): string => {
    
    return data.request_token
}

export const parseUserSessionData = (data: userSessionDataResponse, sessionId: string): LoggedInUser => {
    
    return({ids: {
        id: data.id,
        sessionId
    },
    preferences: {
        interfaceLanguage: data.iso_3166_1,
        includeAdult: data.include_adult
    },
    info: {
        name: data.name,
        username: data.username,
        mugshot: `https://www.gravatar.com/avatar/${data.avatar.gravatar.hash}.png?s=300`,
        country: data.iso_639_1
    }})
}