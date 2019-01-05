# heroku-basics-nodejs
How to deploy a mini nodejs application to Heroku


## NodeJS container
* run docker image (in my case nodejs:1)
* go to your folder (in our case /home/project because we mounted here our volume)
* create/copy index.js and public folder
* set same port than what you exposed in docker container
* npm init and install required module (ex. express)
* install git and put node_modules to ignore 
* change port and package.json
   * port must use envPort for heroku
   * package.json - scripts must have "start": "node index"

## Heroku and deploy
* create heroku account (in my case it is a free account)
* create new app
* install & set heroku-cli
* use git to deploy
* from browser or open browser with terminal :D
