const fs   = require('fs');
const s3   = require('s3');
const env  = process.env.NODE_ENV;
const path = require('path');

var configPath = path.resolve('config', 'deploy', `${env}.json`);
var config;

const pretty = require('prettysize');

try {
  config = JSON.parse(fs.readFileSync(configPath), 'utf8');
} catch(err) {
  throw(`Error: could not find config file at "${configPath}"`);
}

var client = s3.createClient({
  maxAsyncS3: 20,     // this is the default
  s3RetryCount: 3,    // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    region: config.region
  },
});

var params = {
  localDir: path.resolve('public', env),
  deleteRemoved: true,

  s3Params: {
    Bucket: config.bucket,
    ACL: 'public-read'
  },
};

var uploader = client.uploadDir(params);

uploader.on('error', function(err) {
  console.error('Error: unable to upload:', err.stack);
});

uploader.on('progress', function() {
  logProgress('Sync', uploader);
});

uploader.on('end', function() {
  logProgress('Done', uploader);
});


function logProgress(type, uploader) {
  console.log(`${type}:`, `  local: ${uploader.filesFound}\tremote: ${uploader.objectsFound}\tsync: ${pretty(uploader.progressMd5Amount, true, true, 1)}\ttotal: ${pretty(uploader.progressMd5Total, true, true, 1)}\tcomplete: ${parseInt((uploader.progressMd5Amount / uploader.progressMd5Total) * 100)}%\tdeleted: ${uploader.deleteTotal}` );
}
