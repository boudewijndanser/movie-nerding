
export type RequesTokenRepsonse = {
    expires_at: string
    request_token: string
    succes: boolean
}

export type sessionResponse = {
    session_id: string
    success: boolean
}

export type userSessionDataResponse = {
    avatar: {
      gravatar: {
        hash: string
      },
      tmdb: {
        avatar_path: string 
      }
    },
    id: number,
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    include_adult: boolean,
    username: string
  }