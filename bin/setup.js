// Setup modified from https://github.com/contentful-userland/gatsby-contentful-starter

const spaceImport = require('contentful-import')
const importFile = require('../contentful/import.json')
const inquirer = require('inquirer')
const chalk = require('chalk')
const path = require('path')
const { writeFile, readFileSync, appendFile } = require('fs')

console.log(`
  To set up this project you need to provide your Space ID
  and the belonging API access tokens.

  You can find all the needed information in your Contentful space under:

  ${chalk.yellow(
    `app.contentful.com ${chalk.red('->')} Space Settings ${chalk.red(
      '->'
    )} API keys`
  )}

  The ${chalk.green('Content Delivery API Token')}
    will be used to ship published production-ready content in your Gatsby app.

  The ${chalk.green('Content Preview API Token')}
    will be used to show not published data in your development environment.

  The ${chalk.green('Content Management API Token')}
    will be used to import and write data to your space.

  Ready? Let's do it! 🎉
`)

const questions = [
  {
    name: 'spaceId',
    message: 'Your Space ID',
    validate: input =>
      /^[a-z0-9]{12}$/.test(input) || 'Space ID must be 12 lowercase characters'
  },
  {
    name: 'accessToken',
    message: 'Your Content Delivery API access token'
  },
  {
    name: 'previewToken',
    message: 'Your Content Preview API access token'
  },
  {
    name: 'managementToken',
    message: 'Your Content Management API access token'
  },
  {
    name: 'importValues',
    message: 'Import some basic contentful content linked to the starter (y/n)'
  }
]

inquirer
  .prompt(questions)
  .then(
    ({ spaceId, accessToken, previewToken, managementToken, importValues }) => {
      console.log('Writing config file...')
      const configFilePath = path.resolve(__dirname, '..', '.env')
      // Write to file.
      let space = 'SPACE_ID=' + spaceId + '\r\n'
      let access = 'ACCESS_TOKEN=' + accessToken + '\r\n'
      let preview = 'PREVIEW_TOKEN=' + previewToken + '\r\n'
      let mgmt = 'CONTENTFUL_MANAGEMENT_TOKEN=' + managementToken + '\r\n'
      let host = 'PREVIEW_HOST=preview.contentful.com\r\n'
      writeFile(configFilePath, space, err => {
        if (err) throw err
      })
      appendFile(configFilePath, access, function(err) {
        if (err) return console.log(err)
      })
      appendFile(configFilePath, preview, function(err) {
        if (err) return console.log(err)
      })
      appendFile(configFilePath, mgmt, function(err) {
        if (err) return console.log(err)
      })
      appendFile(configFilePath, host, function(err) {
        if (err) return console.log(err)
      })

      console.log(`Config file ${chalk.yellow(configFilePath)} written`)

      return { spaceId, managementToken, importValues }
    }
  )
  .then(({ spaceId, managementToken, importValues }) => {
    if (importValues.toLowerCase().includes('y')) {
      spaceImport({ spaceId, managementToken, content: importFile })
    }
  })
  .then((_, error) => {
    console.log(
      `All set! You can now run ${chalk.yellow(
        'gatsby develop'
      )} to see it in action.`
    )
  })
  .catch(error => console.error(error))
