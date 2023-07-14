var articleProvider = new ArticleProvider('127.0.0.1', 27107);

var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

ArticleProvider = function(host, port) {
  this.db = new Db('node-mongo-blog', new Server(host, port, {auto_reconnect: true}, {}));
  this.db.open(function(err){
    if(err) {
      console.log(err);
    }
  });
};