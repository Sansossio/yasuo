# Yasuo Monorepo

## Environment variables
```env
# Riot games
RIOT_API_KEY=
RIOT_DEBUG=true
RIOT_CONCURRENCY=5
```

## Swagger
### Summoners api
Url: [http://localhost:3000/api](http://localhost:3000)

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
