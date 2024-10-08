# Next js

* Whatu is Next.js?

`React.js`

* It's not feasible to create a fully-featured application ready for production
* React is a library for building user interfaces
* You need to make descision about other features such as routing,data featching and more.

`Next.js`

* It uses react for building user interfaces
* Provides additional features that enables you to build production-ready application.
* These feature includes routing,optimized rending,data fetching,bundling,compiling and more.
* You don't need to install additional package as Next.js provides everything you need.
* Opinions and conventions should be followed to implement therse features.
* Next.js is framework of React.js

## Why need Next.js?

Next.js simplifies the process pf building a web application for production.

1. Routing
2. API routes
3. Rendering
4. Data fetching
5. Styling
6. Optimization
7. Dev and prod build system

## Prerequisites

* HTML,CSS and javascript
* ES6+ features
* React.js

## Getting Started

```bash
npx create-next-app@latest 
```

```bash
√ What is your project named? ... hello-world
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes 
```

## React Server Components(RSC)

React Server Components is a new architecture introduce by the react team in versio 18 which was quickly embraced by next.js

The Architecture introduces a new way of creating React Components,splitting them into types:

1. Server Components

    * In next.js all components are server components by default.
    * They have the ability to run tasks like reading files pr fetching data from a database.
    * However,they don't have the ability to use hooks or handle user interactions.

2. Client Components
   * to create a Client Components,it's necessary to add "use client: at the top of the components file.
   * Client components can't perform tasks like reading files,but they have the ability to use hooks and manage interactions.
   * Client components are rendered on the client-side.

## Routing

* Next.js has file system based routing mechanism.
* URL ppaths that users can access in the brower are defined by files and folders in your codebase.

### Routing Conventions

* All routes must be placed inside the app folder.
* Every file that corresponds to a route must be named `page.js` or `page.tsx`.
* Evry folder corresponds to a path segment in the bowser URL.

* `Routing`
![alt text](image.png)

* `Nested Routing`
![alt text](image-1.png)

* `Dynamic Routing`
![alt text](image-2.png)

* `Nested Dynamic Routing`
![alt text](image-3.png)

* `catch-all-segment`
![alt text](image-4.png)

## Private Folder

A Private folder indicates that it is a private implementation details and should not be considered by the routing system.

The folder and all its subfolder are excluded from routing.

## Private Folders Contd

* For separating UI logic from routing logic
* For consistently organizing internal files across a projects.
* For sorting and grouping files in code editors.
* And finally,for avoiding potential naming conflicts with future Next.js file conventions.

## Route Groups

Allows us to logically group our routes and project files without affecting the URL path structure.

Let's implement authentication routes.

* Register
* Login
* Forget Password

## Layout

* A page is UI that is unique to a route.
* Layout is UI that is shared between multiple pages in the app.

### How to Create Layout

* You can define a layout bt default exporting a React components from a layout.js or layout.tsx file.

* That component should accept a children prop that will be populated with a child page during rendering.

```bash
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

```

![alt text](image-5.png)

## Routing Metadata

Ensuring  proper search engine optimization (SEO) is crucial for increasing visibility and attrating users.

Next.js introduced the Metadata API which allows you define metadata for each pages.

Metadata ensures accurate and relevant information is displayed when your pages are shared or indexed.

## Configuring Metadata

* Export a static metadata object
* Export a dynamic generated Metadata function

*Metadata rules*

Both layout.tsx and page.tsx files can export metadata.If defined in a layout,it applies to all pages in the layout,but if defined in a page,it applies only to that page.

Metadata is read in order,from the root level down to the final page level.

When there's metadata in multiple places for the same route,they get combined,but page metadata will replace layout metadata if they have the same properties.

## Templeates

Templates are similar to layout in that they wrap earch child layout or page.

But,with templates,when a user navigates between router that share a template, a new instance of the component is mounted,DOM elements are recreated,state is not preserved,and effocts are re-synchronized.

A templete can be defined by exporting a default react component from a template.tsx file.

Similar to layout,template also should accept a children prop which will render the nested segments, in the router.

## Loging.tsx

This file allows us to create loading states that are displayed to users while a specific route segment's content is loading.

The loading state appears immediately upon navigation,giving users the assurance that the application is responsive and actively loading content.
