# README FIRST

## WITHOUT DOCKER

## Installation

```bash
$ npm install
```

Then create an `.env` file with the **MongoDB URL**, like this:

```env
MONGO_CONNECTION="mongodb://localhost:27017/mun"
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Test

```bash
# unit tests
$ npm run test
```

## WITH DOCKER

## Running the app

Just run the next `docker-compose` command:

```bash
$ docker-compose up -d
```

## License

[MIT licensed](LICENSE).