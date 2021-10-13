# todo
Overview of what I want to work on

## Nav

### MVP
- [  ] Add pages / profile link
- [  ] Set active tab

### Optional
- [ ] Show number of favorites / watchlist / ratings

## Application
### MVP
- [ ] Add object with userData to each movieItem {
    favorite: boolean
    watchlist: boolean
    rating: number
}
- [ ] Map add all movieItems to 1 array?
- [ ] Or when parsing pass in the other to set the userData values
## Home

### MVP
- [ ] Show upcoming movies based on watchlist movie dates + current date

## Profile

### MVP
- [ ] List pagination (Watchlist, favorites, ratings)
The list return 20 items at once with a number of page
- [ ] Show rating on profile/ratings
- [ ] Get genres out of list and match the id's with the titles / display them

### Optional
- [ ] Show ratings on all items, compare other 2 with ratings output, add rating to the items when present
- [ ] Add to watchlist button on each small moviecover

## Movie detail
### MVP
- [ ] Show rating on cover if present
- [ ] Link to actor detail, local or on TMDB

### Optional
- [ ] Show favorite / watchlist / rating on cover
- [ ] Set above from there

