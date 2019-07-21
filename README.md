<p align="center">
  <a href="https://next.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Contentful TypeScript starter 
</h1>

Gatsby starter with Contentful and TypeScript configuration.


## 🚀 Quick start

1.  **Install the Gatsby CLI.**

    The Gatsby CLI helps you create new sites using Gatsby starters (like this one!)

    ```sh
    # install the Gatsby CLI globally
    npm install -g gatsby-cli
    ```

2.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    gatsby new gatsby-contentful-typescript-starter https://github.com/thisnamespace/gatsby-contentful-typescript-starter
    ```

3.  **Navigate to your Site directory.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd gatsby-contentful-typescript-starter
    ```


3. **Set Contentful API keys and Start developing.**

    Rename **`empty.env`** to **`.env`** and set your Contentful API variables
    Or alternatively you can run **`npm run setup`** this will attempt to import a content-type, content and assets.
    And then start it up.
    
    ```sh
    npm run setup
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
    Open the the `gatsby-contentful-typescript-starter` directory in your code editor of choice and edit `src/pages/index.ts`. Save your changes and the browser will update in real time!
    
## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── bin
    ├── contentful
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .nvmrc
    ├── .prettierrc
    ├── empty.env
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tslint.json

  1.  **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.  
  
  2.  **`/bin`**: This directory will contain the scripts needed to setup and backup your contentful instance.
  
  3.  **`/contentful`**: This directory will contain the json file needed to import a basic page content model and content along with assets to your contentful instance.
  
  4.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.
  
  5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
  
  6. **`.nvmrc`**: NVM configuration so packages works as they should

  7.  **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.

  8. **`empty.env`**: Rename to **`.env`** and set your Contentful API key
  
  9.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  10.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
  
  11.  **`gatsby-ssr.tsx`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://next.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
  
  12.  **`LICENSE`**: Gatsby is licensed under the MIT license.
  
  13.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).
  
  14.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
  
  15.  **`README.md`**: A text file containing useful reference information about your project.

  16.  **`tsconfig.json`**: Config file for TypeScript

  17.  **`tslint.json`**: TS Lint configuration file

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://next.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://next.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head [to our documentation](https://next.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/fhavrlent/gatsby-contentful-typescript-starter)
