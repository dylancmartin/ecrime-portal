var aws = require("aws-sdk");

aws.config.update({
  accessKeyId: "AKIAWVDRCTF6QQ3DBKRW",
  secretAccessKey: "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",
  region: "us-west-2"
});

var csDomain =
  "doc-searchwarrant-hesztchdn56fvmxibudpuzgt7m.us-west-2.cloudsearch.amazonaws.com";
var sDomain =
  "search-searchwarrant-hesztchdn56fvmxibudpuzgt7m.us-west-2.cloudsearch.amazonaws.com";
var cloudsearch = new aws.CloudSearchDomain({ endpoint: csDomain });

var documentsBatch = [];

var document = {};
document.id = 5;
document.type = "add";
document.fields = {
  content: "this is a fake document with fake content",
  content_encoding: "UTF-8",
  content_type: "text/plain",
  resourcename: "Sketchy Fake Document"
};

documentsBatch.push(document);

var params = {
  contentType: "application/json",
  documents: JSON.stringify(documentsBatch)
};

console.log(params);

cloudsearch.uploadDocuments(params, function(err, data) {
  if (err) {
    console.log(err.stack);
  } else {
    console.log("document uploaded successfully");
  }
});
