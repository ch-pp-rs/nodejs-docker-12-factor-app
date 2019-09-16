# nodejs-docker-12-factor-app
A brief example of how to run nodeJS app in docker complying to the 12 Factor App guidelines

## Run with Docker
* `docker build -t nodejs-12-factor .`
* `docker run -e MESSAGE="12 Factor Rocks" --publish 8080:3000 nodejs-12-factor:latest`
* navigate to `http://localhost:8080/`
