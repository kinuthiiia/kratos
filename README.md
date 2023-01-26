## About The Project

This application helps athletes to: - Create optimized workout sessions for peak athlete performance. - Track execution of these sessions. - Get reminders of upcoming sessions - Share workout sessions. - Track general performance of the athlete

Every new athlete starts by creating an account on the application using various providers (Google, Twitter).

Existing athletes just sign in back to their account and continue using the application.

Every sport has its own customization options when it comes to creating workout sessions.
eg. Body building has options like reps, tempo, sets, time interval between sets whereas swimming has options like distance , time , effort, etc.

Athletes can also set goals per sport and analysis of achievability be established.

## Tech Stacks Used

1. **Next.js** - Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

   To learn more about Next.js, take a look at the following resources:

   - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
   - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

   ### Building the UI

   I coupled Next.js with Mantine Compoment library (https://mantine.dev/) to build my UI.

   Note : Mantine is a fairly young component library and hence it's community is still small but growing nontheless. However , it's beautiful and robust.

2. **Supabase** - Supabase is an open source Backend As A Service (BaaS). Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, and Storage.

I opted to use supabase because of it's ease of use and set-up and the documentation is straight forward.

## Running the project locally

1. First, clone the repository:

```bash
git clone ...
```

2. Inside the cloned repo, run :

```bash
npm i --save
```

3. After successful dependancies installation, run the project by running :

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
