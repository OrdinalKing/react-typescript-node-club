## Prerequisites

You must have the following installed:

- [Node.js v10+](https://nodejs.org/en/download/)
- NPM v6+ (comes installed with newer Node versions)

## Setting up the Application

Create a configuration file for your application:

```bash
cp .env.example .env
```

Edit `.env` with the configuration parameters.

Next, we need to install our dependencies from npm:

```bash
npm install
```

Now we should be all set! Run the application using the `npm` command.

```bash
npm run dev
```

## Dokerization

If you run the backend with docker, you can use the following command lines.

`docker-compose up -d`
