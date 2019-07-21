const contentfulExport = require('contentful-export')
const fs = require('fs')
const moment = require('moment')
require('dotenv').config({
  silent: true
})

const fileName = 'contentful-export-' + moment().format('MMM-DD-YYYY') + '.json'

// Check for command line arguments and add typing
const argv = require('minimist')(process.argv.slice(2), {
  boolean: ['skip-content', 'test']
})

// Creates directory if it doesn't exist
!fs.existsSync('archive') && fs.mkdirSync('archive')
console.log(process.env.SPACE_ID)
// Export options
const exportOptions = {
  spaceId: process.env.SPACE_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  skipContent: argv['skip-content'],
  exportDir: 'archive',
  contentFile: fileName
}

contentfulExport(exportOptions)
  .then(result => {
    console.log('Successfully backed up')
  })
  .catch(err => {
    console.log('Could not be backed up')
  })
