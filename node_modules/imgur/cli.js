#!/usr/bin/env node
'use strict';
const imgur = require('./lib/imgur');
const commander = require('commander');
const util = require('util');

// Used to collect args for specific options
function collect(val, arr) {
  arr.push(val);
  return arr;
}

commander
  .version(imgur.VERSION)
  .option('-i, --info [id]', 'Lookup images by ID', collect, [])
  .option(
    '-b, --base64 [string]',
    'Upload a base64-encoded images',
    collect,
    []
  )
  .option('-u, --url [url]', 'Upload URLs', collect, [])
  .option('-f, --file [file ...]', 'Upload binary image files', collect, [])
  .option(
    '-c, --client-id [id]',
    'Specify a client ID to use only for the current operation'
  )
  .option('-a, --album-id [id]', 'Specify an album ID to upload images to')
  .option('--credits', 'Get information about remaining credits')
  .option('--save [id]', 'Save client id to disk for future use')
  .option('--clear', 'Remove previously saved client id')
  .option('--show', 'Display saved client id')
  .parse(process.argv);

// @TODO: There's probably a more promisey/chainy way to make this more succinct

imgur
  .loadClientId()
  .catch(() => {})
  .then(imgur.setClientId)
  .finally(() => {
    if (commander.clientId) {
      imgur.setClientId(commander.clientId);
    }

    if (commander.show) {
      console.log(imgur.getClientId());
    } else if (commander.clear) {
      imgur.clearClientId().fail((err) => {
        console.error('Unable to clear client id (%s)', err.message);
      });
    } else if (commander.save) {
      imgur.saveClientId(commander.save).fail((err) => {
        console.error('Unable to save client id (%s)', err.message);
      });
    } else if (commander.credits) {
      imgur.getCredits().then(
        (json) => {
          console.log(json);
        },
        (err) => {
          console.error('Unable to get credit info (%s)', err.message);
        }
      );
    } else {
      if (commander.file.length || commander.args.length) {
        const args = commander.file.concat(commander.args);
        const albumId = commander.albumId ? commander.albumId : null;
        if (!albumId && args.length > 1) {
          let aId, deleteHash;
          imgur.createAlbum().then(
            (json) => {
              aId = json.id;
              deleteHash = json.deletehash;
              console.log('Album -> https://imgur.com/a/%s', aId);
              args.forEach((file) => {
                imgur.uploadFile(file, deleteHash).then(
                  (json) => {
                    const output = util.format('%s -> %s', file, json.link);
                    console.log(output);
                  },
                  (err) => {
                    console.error('%s (%s)', err.message, file);
                  }
                );
              });
            },
            (err) => {
              console.error('Unable to create album (%s)', err.message);
            }
          );
        } else {
          args.forEach((file) => {
            imgur.uploadFile(file, albumId).then(
              (json) => {
                let output;
                if (args.length > 1) {
                  output = util.format('%s -> %s', file, json.link);
                } else {
                  output = json.link;
                }
                console.log(output);
              },
              (err) => {
                console.error('%s (%s)', err.message, file);
              }
            );
          });
        }
      }

      if (commander.info.length) {
        commander.info.forEach((id) => {
          imgur.getInfo(id).then(
            (json) => {
              console.log(json);
            },
            (err) => {
              console.log(err.message);
            }
          );
        });
      }

      if (commander.base64.length) {
        commander.base64.forEach((str) => {
          imgur.uploadBase64(str).then(
            (json) => {
              let output;
              if (commander.base64.length > 1) {
                output = util.format(
                  '%s... -> %s',
                  str.substr(0, 7),
                  json.link
                );
              } else {
                output = json.link;
              }
              console.log(output);
            },
            (err) => {
              const output = util.format(
                '%s (%s...)',
                err.message,
                str.substr(0, 7)
              );
              console.error(output);
            }
          );
        });
      }

      if (commander.url.length) {
        commander.url.forEach((url) => {
          imgur.uploadUrl(url).then(
            (json) => {
              let output;
              if (commander.url.length > 1) {
                output = util.format('%s -> %s', url, json.link);
              } else {
                output = json.link;
              }
              console.log(output);
            },
            (err) => {
              console.error('%s (%s)', err.message, url);
            }
          );
        });
      }
    }
  });
