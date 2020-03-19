## Codeility test for TSG

This codility test was completed for TSG.

After running `npm i` to install dependencies, run `npm star`t to start app. Run app in browser by visiting `localhost:3000`

The original test:

1) Add a like button:
 - The content of the like button should be in the following format: "Like | 100", where 100 is the total number of likes.
 - It should have a "like-button" class.
 - Wrap the number of likes in a span with a "likes-counter" class.
 - The initial number of likes in the counter should be 100.
 
 2) Add a dislike button:
  - The content of the dislike button should be in the following format: "Dislike | 25", where 25 is the total number of dislikes.
 - It should have a "dislike-button" class.
 - Wrap the number of dislikes in a span with a "dislikes-counter" class.
 - The initial number of dislikes in the counter should be 25.
 
 3) Users can like an article by clicking the like button
 - Number of likes should increase by one.
 - Like button should have a "liked" class in addition to the "like-button" class
 
 4) Users can dislike an article by clicking the dislike button
  - Number of dislikes should increase by one.
  - Like button should have a "disliked" class in addition to the "dislike-button" class
  
  5) Users can cancel their like by clicking again on the like button
  - Like counter should decrease by one
  - "liked" class should be removed from the like button (you can use the classnames tool for that)
  
  6) Users can cancel their dislike by clicking again on the dislike button
  - Disike counter should decrease by one
  - "disliked" class should be removed 
  
  7) Disliking an already liked article cancels the like:
  - Like counter should decrease by one
