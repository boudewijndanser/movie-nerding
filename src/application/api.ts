
export const FetchData = async <ResponseData, ReturnData>(url: string, Parser: (input: ResponseData) => ReturnData): Promise<ReturnData | undefined> => {

    const response  = await fetch(url)
    const json: ResponseData = await response.json()
    const parsed = Parser(json)


    return parsed
}

