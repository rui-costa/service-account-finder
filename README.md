# Service Account Finder

The **service account finder** allows you to search github for leaked service accounts.
This script is intended for educational purposes around security problems.

## Contents

1. [💻 Requirements](#requirements)
1. [🚀 How to run](#how-to-run)
1. [🏷 Versioning](#versioning)

## Requirements

- [🐳 Docker](https://docs.docker.com/get-docker/)

## Before running

### Environment variables

Secrets will be passed to the application using environment variables. In case
you are running the application locally, you can leverage the `.env` file in
order to configure your variables. Environment variables names can be found in
`templates/.env.template`.

## How to run

- MacOS and LINUX

```
./run
```

- Windows

```
docker-compose build --no-cache --parallel
docker-compose up --no-log-prefix 
```

## Versioning

Versioning follows the [Semantic Versioning](https://semver.org/) standard.
