##Spotify Browser 

- Built using Angular
- Webpage that supports searching for artists, albums, and tracks in Spotify

**How To Run: **
 1.  Install the Angular Command Line Interface (CLI) globally
 ``` 
 npm install -g @angular/cliInstall
 ```
 2. Install dependencies in both the server and client folders
```
cd webserver
npm install
```
```
cd client
npm install 
```
3. Running the webserver

  1. Create an account in [Spotify Developers](https://developer.spotify.com/)
  2. Set the redirect URI to http://localhost:8888/callback
  3. Create two files: 
   - client_secret.json, with your consumer key and secret
```     
      {
       "client_id": "Your Client Key",
       "client_secret": "Your Client Secret"
      } 
 ```
   - tokens.json
 ```
     {
      "access_token": null,
      "refresh_token": null
     } 
  ```
  4. Start the webserver
  ```
  npm start
  ```
4. Running the client
```
ng serve
```

