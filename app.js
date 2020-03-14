const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//create add command
yargs.command({
  command: 'add',
  description: 'Add new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

//create remove command
yargs.command({
  command: 'remove',
  description: 'Remove note',
  builder: {
    title: {
      description: 'Remove note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function() {
    notes.removeNote(argv.title);
  }
});

//create list command
yargs.command({
  command: 'list',
  description: 'List notes',
  handler: function() {
    console.log('list notes');
  }
});

//create read command
yargs.command({
  command: 'read',
  description: 'Read notes',
  handler: function() {
    console.log('read notes');
  }
});

yargs.parse();
