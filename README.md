# Sangeet-A-React-web-app-with-Spotify-API-interaction

### Table Of Content

 * Description
 * Project Instructions
 * How to setup the application
 * Features



### Description
A React web application,
 * which requests the Spotify API that allows users to search the Spotify library
 * create a custom playlist
 * then save it to their Spotify account
 
 ### Project Instructions
 This project major task were,
 * Creating Static Components
 * Passing Information to Components
 * Setting the State of Sangeet Components
 * Interacting with the Spotify API
 
 ### How to setup the application
 1. `git clone https://github.com/vivek92-tech/Sangeet-A-React-web-app-with-Spotifi-API-interaction.git`
 2. run `npm install`
 3. go to https://developer.spotify.com/dashboard/ and login with your spotify account 
 4. Then create an app on the Spotify Dashboard and obtain client ID
 5.  Now save your Client ID into src/util/Spotify.js file on the top `clientId` variable.
 
 ![Screen Shot 2020-08-16 at 11 24 52 PM](https://user-images.githubusercontent.com/61467017/90355930-d4f84280-e01b-11ea-9c7e-bc21b8f50459.png)
 
 6.  On the same location, second line from the top, copy `redirectUri` value and save it to your Spotify-account's-app's-edit-setting's-Redirect URIs value, that you have created earlier on step 4.
 
 ![Screen Shot 2020-08-16 at 11 56 49 PM](https://user-images.githubusercontent.com/61467017/90356049-31f3f880-e01c-11ea-99a4-060e58db2846.png)

 
 7. Now run `npm run start` and open `http://localhost:3000//callback/`
 The page will reload if you make edits.
  
 
 ### Features
 To search for the songs list, Type the artist name and click search.
 Note: make sure initial letter of each word is capital.
 
 ![Screen Shot 2020-08-16 at 10 28 10 PM](https://user-images.githubusercontent.com/61467017/90356112-6667b480-e01c-11ea-9066-d8133f25e200.png)


### To Add songs to your Playlist, click `+` button on Result-songs list and add it to your new playlist, click `-` button on the playlist section to remove a song. You can also change name of the new list according to your choice.  

![Screen Shot 2020-08-16 at 10 29 08 PM](https://user-images.githubusercontent.com/61467017/90356238-cf4f2c80-e01c-11ea-99c1-655728be4b56.png)

### Now click `Save to Spotify` option, this will save your custom playlist to your Spotify account

![Screen Shot 2020-08-16 at 10 29 24 PM](https://user-images.githubusercontent.com/61467017/90356335-38cf3b00-e01d-11ea-8bf0-4cae79803e43.png)


### open your Spotify app on your computer of mobile to confirm if your custom playlist is saved or not.

![Screen Shot 2020-08-16 at 10 29 46 PM](https://user-images.githubusercontent.com/61467017/90356421-8350b780-e01d-11ea-91f2-a775b2778690.png)



 
 
 
