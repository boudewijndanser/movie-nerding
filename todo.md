# todo
Overview of what I want to work on

## Nav

### MVP
- [ ] Add pages / profile link
- [ ] Set active tab

### Optional
- [x] Show number of favorites / watchlist / ratings

## Application
[ ] Add extra check to be sure all movies are loaded from API before passing to profileContainer
### MVP

- [x] Add catches to API calls
- [X] Add object with userData to each movieItem {
    favorite: boolean
    watchlist: boolean
    rating: number
}
- [x] Map add all movieItems to 1 array?
- [x] Or when parsing pass in the other to set the userData values
## Home

### MVP
- [ ] Show upcoming movies based on watchlist movie dates + current date

## Profile

### MVP
- [ ] List pagination (Watchlist, favorites, ratings)
The list return 20 items at once with a number of page
- [ ] Show rating on profile/ratings
- [x] Get genres out of list and match the id's with the titles
- [ ] Display them in the headers

### Optional
- [ ] Show ratings on all items, compare other 2 with ratings output, add rating to the items when present
- [ ] Add to watchlist button on each small moviecover

## Movie detail
### MVP
- [ ] Show rating on cover if present //Almost...
- [ ] Link to actor detail, local or on TMDB

### Optional
- [ ] Show favorite / watchlist / rating on cover //Almost
- [ ] Set above from there

