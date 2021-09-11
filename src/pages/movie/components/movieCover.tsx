import { largeCoverUrl } from '../../../application/hardcoded'


export const MovieCover = (path: string, alt: string) => {

    return(
        <div className='posterLeft'>
            <img 
                className="coverImg" 
                src= {`${largeCoverUrl}${path}`} 
                alt= {alt}
                />
        </div>
    )
}