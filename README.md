# fbi-practice with fbi-project-vue

A practice about user management front-end which uses `fbi-project-vue` and it works with `fbi-project-mod`.

> This is an fbi project. If you haven't installed [fbi](https://github.com/AlloyTeam/fbi) yet, use the following command to install.
>
> `$ npm i -g fbi` or `yarn global add fbi`

## Requirements

- `fbi v3.0+`
- `node v7.6+`

## Features

- Using vue.js 2.0+ and Element-UI to build the webpages
- Using vue-router to redirect pages
- Loading user data from fbi-project-mod practice (virtual data)
- Providing methods to edit users data
- Providing methods to remove users dats

## Usage

**Show available tasks**

```bash
$ fbi ls
```

**Run a task**

```bash
$ fbi <task> [params]
```

**Update template**

```bash
$ fbi up vue
```

## Tasks

### `serve`

- Description: Compile and start development server.
- Params:
  - `port` `{Number}` Server starting port. If occupied, switch automatically.
- Alias: `s`
- Examples:
  - `fbi s -port=9999`

### `build`

- Description: Build the project for the specified environment.
- Params:
  - `p/prod` `{Boolean}` (default) Production environment.
  - `t/test` `{Boolean}` Test environment.
- Alias: `b`
- Examples:
  - `fbi b -t`
  - `fbi b -p`

## More

- [More Official templates](https://github.com/fbi-templates)
- [`fbi` documentation](https://neikvon.gitbooks.io/fbi/content/)

## License

[MIT](https://opensource.org/licenses/MIT)