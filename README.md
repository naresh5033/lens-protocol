This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## lens protocol 

This protocol is a code base, we can either fork and deploy ourself or we can actually take someone's code base that has been deployed in someother n/w we can use that build off the existing data as well as the n/w effect

There are couple of ways we can interacting with the lens protocol, they ve their SCs deployed to polygon or we can deploy our own and we can directly interact with the SC fns already written, also they ve their own indexer that written in graphql we can query or send mutations.

And finally we can interact with the graph protocol, there is no official subgraph yet but we can use some community developed subgraphs that are under development.

## App

This is a next.js app, that allow the user to see all the info abt all the users that are currently part of the protocol, this allow us to search for the new users and drill down individual users to see the profile info and then follow a user.

# dependencies 

```yarn add urql graphql ethers ipfs-http-clien uuid wagmi omit-deep```

## LensHub.sol (doc)

the Lenshub.sol will give us the fns we can call them directly such as state changing fns, view fns, events, follow modules, ref modules, collect modules etc. and the other api calls for read and write ops.

For the profile (getprofile) api the graphql qurery we can use.

Recommended profiles: -> is the way to get the popular profiles, we can use this query to for our api call.

## Follow User

"To follow the user" we ve to make a contract call, for that we need to get the contract addr -> the deployed contract addr the polygon mainet addr, where we can find diff addr such as LensHubProxy, Lenshub Implementation, publishing logic etc.

We'll use the LensHub proxy contract addr and the periphericontract addr we can also get the deployed contract abi from the polygon etherscan with the deployed addrs of the following contracts 