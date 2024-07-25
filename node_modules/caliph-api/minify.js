const yargs = require("yargs/yargs");
opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
const path = require("path");
const fs = require("fs");
function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

async function start() {
  if (opts.path) {
    dir = path.join(process.cwd(), opts.path);
    if (!fs.existsSync(dir)) return console.log(`Dir ${dir} not exists!!`);
    let allow_ext = ["js", "html", "css"];
    let filters = getFiles(dir).filter(
      (a) => allow_ext.includes(a.split(".").pop()) && !/node_modules/gi.test(a)
    );
    for (let i of filters) {
      let latency = new Date();
      try {
        let minifyres = await (await import("minify")).minify(i);
        await fs.promises.writeFile(i, minifyres);
        console.log(
          `File ${i.split("/").pop()} Success Compressed, Latency : ${
            new Date() - latency
          }ms`
        );
      } catch (e) {
        console.error(`File ${i.split("/").pop()} Failed To Compressed!`);
      }
    }
  }
}

start();
