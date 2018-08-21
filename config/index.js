'use strict'

If(process.env.NODE_ENV === 'production'){

  module.exports = {
    host: process.env.dbURI || "",
    dbURI: process.env.dbURI
  }
}else{
  module.exports = require('./development.json');
}
}
