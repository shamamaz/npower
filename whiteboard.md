## Whiteboarding Questions

### 1 Online Magazine

#### Overview
We require an online magazine which contains issues, and their related articles. While the issues are not localized, the articles owned by the issues are available in both English and French. Issues are organized by month and year. Articles only need to have their title, and slug. Metadata such as author is a 'nice to have' but not required for this exercise.

##### Database Design
- Design a DB schema that captures the domain above.
-- Mentor should guide conversation as well as emphasize the use of foriegn relationships (e.g. one - many). It isn't necessary to dive into field types, but it is great to include those points
-- Conversation can occur around indexing possiblities for article, e.g. do we index `slug`, is primary an autoincrement `ID`

- Write a SQL statement that would select all articles for `English` from the `December` issue in `2017`
-- While it can be done through multiple statements, the use of joins (and types of joins) are good topics of discussion and discovery as participant shares their thought process.

##### API Design
An API service will be used to consume and create content from this database. Design REST endpoints for the following:
- Obtain all articles from an issue from `X` month, and `Y` year, e.g. `GET /issues/X/Y/articles`
- Obtain a specific article with slug `general-announcements`, e.g. `GET /articles/general-announcements`
- Create a new article for an issue, e.g. `POST /articles` or another possibility `POST /issues/X/Y/articles`
- Update an article, e.g. `PUT/PATCH /articles/:id`. Converation point: PUT vs PATCH. Candidate should be aware of the common update patterns
- Delete an article, e.g. `DELETE /articles/:id`

### 2 Online Streaming Service
#### Overview
You have been asked to build a video streaming site, which will display tv shows and movies to users. 

The primary feature on this site will be its "Recommended for you" section, which will be based:
- the user's viewing history 
- ratings that the user provides for the videos that they watch. 

Metadata will be stored on each video:
- categories
- titles
- length
- production company
- director

It will be used to primarily separate the site into various categories, which the user may be recommended as a whole as well. 

##### Database Design
- Design a DB schema that captures the domain above.
-- Mentor should guide conversation, including discussions around optimized storage for large files, metadata storage, and how to optimize for internet streaming speed, as well as retrieve and categorize the information from the metadata.
-- Discussion can include best UI practices and storage for ratings (stars vs thumbs up), and discussion around the social aspect, and how recommendations will be made.
- Design a recommendation algorithm, that assumes that each user gives a score from 1-5 (1 being "disliked a lot", 5 being "really liked") on each video that they have watched, and are recommended other videos based on the scores of similar users on videos. User similarity is decided by aggregating their ratings, and determing which users give certain videos similar ratings.
-- Mentor should guide discussion on database efficiency. Will these recommendations be generated each time based on the similarity ratings? 