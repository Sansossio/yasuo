# Yasuo Monorepo

## Environment variables
```env
# Services
MMR_SERVICE_URL=http://localhost:3333/mmr

# Riot games
RIOT_API_KEY=
RIOT_DEBUG=true
RIOT_CONCURRENCY=5
RIOT_RATE_LIMIT_RETRY=true
RIOT_RATE_LIMIT_RETRY_ATTEMPTS= 5

# Database
DATABASE_URI=mongodb://root:123456@127.0.0.1:27017/yasuogg?authSource=admin
```

## Swagger
### Summoners api
Url: [http://localhost:3000/summoner/api](http://localhost:3000/summoner/api)

### Mmr api
Url: [http://localhost:3333/mmr/api](http://localhost:3333/mmr/api)

## NX workflow

### Generate an Angular application

`ng g @nrwl/angular:app my-app`

### Generate a nestJS application

`nx generate @nrwl/nest:application my-app`

### Generate simple library

Module **not** needed to use this library.

`nx generate @nrwl/workspace:library mylib`

Import from `@yasuogg/mylib`.

### Generate an Angular library

`nx generate @nrwl/angular:lib my-lib`

Use prefix `@yasuogg`.

Import from `@yasuogg/mylib`.

### Generate a Nest library

This should be preferred option to create Nest libraries since this command add the library to the NX _chain_ of testing, etc...

`nx generate @nrwl/nest:library my-lib`

Use prefix `@yasuogg`.

Import from `@yasuogg/mylib`.

### Delete lib, app

`nx generate rm my-lib`
`nx generate rm my-app`
