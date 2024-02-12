This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Database

# prisma

`npx prisma generate` para generar el cliente de la base de datos. Guarda los cambios en `prisma/schema.prisma` y ejecuta este comando para aplicarlos.
`npx prisma db push` para aplicar los cambios en el esquema de la base de datos.
`npx prisma format` para formatear el archivo `schema.prisma`.

Al usar prisma, si pones `npx prisma studio` , se ejecutará un servidor local que te permitirá ver y modificar la base de datos.
(Para esto, primero debes haber ejecutado `npx prisma generate`)
[ `localhost:5555` ]

## Estilo de Código y Pre-commits

Lo instale con : `npx husky-init && npm install`
Para asegurar la consistencia en el estilo de nuestro código y facilitar la colaboración, hemos integrado Prettier y Husky en el proyecto.

### Prettier

Prettier es una herramienta para formatear automáticamente nuestro código siguiendo un conjunto de reglas predefinidas. Esto nos ayuda a mantener un estilo coherente y a evitar discusiones sobre formatos en las revisiones de código.

Para formatear el código manualmente, ejecutá:

```bash
npm run format
```
