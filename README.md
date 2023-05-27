<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Description

This project makes part of [clubpetro's](https://postos.clubpetro.com/https://postos.clubpetro.com/) challenge. An app to register places to visit around the world with a goal and countries flags to supply any frontend app.
- Flag URLs can be taken from http://www.geognos.com/, an example: http://www.geognos.com/api/en/countries/flag/BR.png

## Installation

```bash
$ npm install
```

## Running the app

```bash
# db postgresql docker development
$ docker-compose build
$ docker-compse up

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Rules
- Only the Place and Goal can be edited;
- The same place in a given country cannot be added twice;
- The data listing should be ordered in ascending order by the goal;

## Documents (Requests)

- In the folder src/documents, you will find the requests of the app to test the API.

## Stay in touch

- Author - [Diego Araujo](https://github.com/diegoshakan)
- YouTube - [Noob Code](https://www.youtube.com/channel/UCE7utsNu7u7HqoZDT2OdUiA)
- Twitter - [@diegoshakan](https://www.instagram.com/diegoshakan/)
