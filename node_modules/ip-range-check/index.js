var ipaddr = require("ipaddr.js");

module.exports = check_many_cidrs;

function check_many_cidrs(addr, range) {
    if (typeof (range) === "string") {
        return check_single_cidr(addr, range)
    }
    else if (typeof (range) === "object") //list
    {
        var ip_is_in_range = false;
        for (var i = 0; i < range.length; i++) {
            if (check_single_cidr(addr, range[i])) {
                ip_is_in_range = true;
                break
            }
        }
        return ip_is_in_range;
    }
}

function check_single_cidr(addr, cidr) {
    try {
        var parsed_addr = ipaddr.process(addr);
        if (cidr.indexOf('/') === -1) {
            var parsed_cidr_as_ip = ipaddr.process(cidr);
            if ((parsed_addr.kind() === "ipv6") && (parsed_cidr_as_ip.kind() === "ipv6")){
                return (parsed_addr.toNormalizedString() === parsed_cidr_as_ip.toNormalizedString())
            }
            return (parsed_addr.toString() == parsed_cidr_as_ip.toString())
        }
        else {
            var parsed_range = ipaddr.parseCIDR(cidr);
            return parsed_addr.match(parsed_range)
        }
    }
    catch (e) {
        return false
    }
}
