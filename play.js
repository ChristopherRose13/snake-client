const { connect } = require('./client');
const { setUpInput } = require('./input');
console.log("Connecting ...");

setUpInput(connect());


