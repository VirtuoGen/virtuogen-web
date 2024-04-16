# VirtuoGen

This project was generated with [Next.js](https://nextjs.org/) version 14.1.4.

## Project setup

```
npm install
```

### Environment variables

```
cp .env.example .env.

# Fill in the environment variables
# Make sure to have this in your .env file
# NEXT_PUBLIC_ENVIRONMENT=YOUR_HOST

# Example
NEXT_PUBLIC_ENVIRONMENT=localhost
```

### Local DB Setup using docker:

- have docker installed and make sure it's running
- run the command `docker-composer up -d`
- run the command `npx prisma db generate` to generate prisma types of your client
- run the command `npx prisma db push` to push the schema to our db
- run the command `npx prisma db seed` to seed your db
- if you want to view & manipulate your data in your Prisma then run `npx prisma studio`
- make sure to stop docker when you are cleaning up using `docker-compose down`

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://nextjs.org/docs/app/building-your-application/configuring).

## Project structure

- `components/`: Contains your Next.js Components.
- `lib/`: Contains your Library code, utils, store.
- `hooks/`: Contains your custom hooks.
- `app/`: Contains your App components.
- `types/`: Contains reusable type definations.
- `prisma/`: Contains your prisma schema.
- `actions/`: Contains your server action functions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
