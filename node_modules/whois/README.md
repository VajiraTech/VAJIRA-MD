# Node WHOIS

[![Build Status](https://drone.io/github.com/FurqanSoftware/node-whois/status.png)](https://drone.io/github.com/FurqanSoftware/node-whois/latest)

Node WHOIS is a WHOIS client for Node.js.

## Installation

### Global

    $ npm install -g whois

#### Usage

    whois [options] address

    Options:
      --version      Show version number                                   [boolean]
      -s, --server   whois server                                    [default: null]
      -f, --follow   number of times to follow redirects                [default: 0]
      -p, --proxy    SOCKS proxy                                     [default: null]
      -v, --verbose  show verbose results                 [boolean] [default: false]
      -b, --bind     bind to a local IP address                      [default: null]
      -h, --help     Show help                            [boolean] [default: false]

### Local

    $ npm install whois

#### Usage

```js
var whois = require('whois')
whois.lookup('google.com', function(err, data) {
	console.log(data)
})
```

You may pass an object in between the address and the callback function to tweak the behavior of the lookup function:

```js
{
	"server":  "",   // this can be a string ("host:port") or an object with host and port as its keys; leaving it empty makes lookup rely on servers.json
	"follow":  2,    // number of times to follow redirects
	"timeout": 0,    // socket timeout, excluding this doesn't override any default timeout value
	"verbose": false // setting this to true returns an array of responses from all servers
	"bind": null     // bind the socket to a local IP address
	"proxy": {       // (optional) SOCKS Proxy
		"host": "",
		"port": 0,
		"type": 5    // or 4
	}
}
```

## Contributing

Contributions are welcome.

## License

Node WHOIS is available under the [BSD (2-Clause) License](http://opensource.org/licenses/BSD-2-Clause).

## Other Projects Using Node WHOIS

- [Dots](https://github.com/FurqanSoftware/dots): Tiny networking toolkit. Uses Node WHOIS to perform WHOIS lookups for domains and IPs.

If you are using Node WHOIS in a project please send a pull request to add it to the list.
