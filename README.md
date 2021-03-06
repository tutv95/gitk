# GitK [![Github All Releases](https://img.shields.io/github/downloads/tutv95/gitk/total.svg)]() [![GitHub forks](https://img.shields.io/github/forks/tutv95/gitk.svg)](https://github.com/tutv95/gitk/network) [![Travis](https://img.shields.io/travis/tutv95/gitk.svg)]()
Sync project from remote git server to local server

# Installation

```
git clone https://github.com/tutv95/gitk.git
```

- Config app: Copy file `.env.example` to '.env'
```
HOST_PORT=2369
```

- Install dependency packages and run app.
```
npm start
```

- Open browser: your-domain.com:HOST_PORT (e.g: http://gitk.com:2369)

- Add project to app.
![Add new project](./docs/images/new-project.png)

- Go to settings webhook of repository and add new webhook:
![Add webhook](./docs/images/add-webhook.png)