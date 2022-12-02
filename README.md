# Smart Brain Project - Face Detection from Images

>This project was a face detection tool based on images. You can simply register and enjoy it for free!
>
>This project was also a journey for me to understand the concept of the front-end, back-end, and database. Moreover, practice linking all three together and deploying them online through Heroku and Github.



## Front End
In the front end part, we created the project based on React library. 
```
We have register, sign in, sign out options for users. 
Users can use an image URL to enjoy the face detection experiment.
The app also accumulate the image entries and showed it to the user. 
```



### `Pure Function vs Smart Function`
Through the coding process along with the tutorial, I realized that there are smart functions (smart components), and pure functions (pure components). 
```
From my understanding:
  Smart functions come with 'state' and prefer to use class syntax for coding.  
  Pure functions only accept props and prefer to use function syntax for coding.
```

### `React One Way Data Flow`
```
Data flows down one way.
Everything flows from state to props.
State can only exist in a container component.
```

### `We can use JSX in React`
We can use JSX in React in order to modify HTML like content. 


## Back End - Server
```
The server is built based on Express, which is a Node.js framework.
I also clear the concept about READful through the project.
The server is hosting on Heroku. 
```

## Back End - Database
```
I built a simple database by using PostgreSQL for users account storage. 
The server is hosting on Heroku.
```