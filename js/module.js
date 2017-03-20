var _  = require('lodash');
var people= [{"id":1,"first_name":"Janice","last_name":"Holmes","email":"jholmes0@alexa.com","gender":"Female","ip_address":"162.57.178.15"},
{"id":2,"first_name":"Teresa","last_name":"Ray","email":"tray1@nationalgeographic.com","gender":"Female","ip_address":"76.138.224.111"},
{"id":3,"first_name":"Joe","last_name":"Henderson","email":"jhenderson2@trellian.com","gender":"Male","ip_address":"79.163.80.12"},
{"id":4,"first_name":"Russell","last_name":"Hicks","email":"rhicks3@kickstarter.com","gender":"Male","ip_address":"139.245.134.93"},
{"id":5,"first_name":"Michael","last_name":"Nichols","email":"mnichols4@cocolog-nifty.com","gender":"Male","ip_address":"41.200.29.77"},
{"id":6,"first_name":"Jack","last_name":"Thomas","email":"jthomas5@github.com","gender":"Male","ip_address":"249.122.135.31"},
{"id":7,"first_name":"Amanda","last_name":"Rodriguez","email":"arodriguez6@blogs.com","gender":"Female","ip_address":"17.219.67.229"},
{"id":8,"first_name":"Linda","last_name":"Austin","email":"laustin7@tripadvisor.com","gender":"Female","ip_address":"136.194.89.58"},
{"id":9,"first_name":"Bobby","last_name":"Mcdonald","email":"bmcdonald8@nih.gov","gender":"Male","ip_address":"233.173.157.115"},
{"id":10,"first_name":"Melissa","last_name":"Perez","email":"mperez9@vimeo.com","gender":"Female","ip_address":"15.2.107.212"},
{"id":11,"first_name":"Virginia","last_name":"Harper","email":"vharpera@hugedomains.com","gender":"Female","ip_address":"36.80.2.43"},
{"id":12,"first_name":"Brenda","last_name":"Berry","email":"bberryb@dropbox.com","gender":"Female","ip_address":"71.153.9.160"},
{"id":13,"first_name":"Kelly","last_name":"Ruiz","email":"kruizc@csmonitor.com","gender":"Female","ip_address":"162.12.144.129"},
{"id":14,"first_name":"Dorothy","last_name":"Ward","email":"dwardd@theguardian.com","gender":"Female","ip_address":"91.99.203.184"},
{"id":15,"first_name":"Teresa","last_name":"Kennedy","email":"tkennedye@businessweek.com","gender":"Female","ip_address":"74.172.119.130"},
{"id":16,"first_name":"Chris","last_name":"Howell","email":"chowellf@shutterfly.com","gender":"Male","ip_address":"13.134.176.199"},
{"id":17,"first_name":"Diane","last_name":"Jackson","email":"djacksong@nba.com","gender":"Female","ip_address":"239.60.194.130"},
{"id":18,"first_name":"Jacqueline","last_name":"Kelly","email":"jkellyh@ft.com","gender":"Female","ip_address":"178.248.144.90"},
{"id":19,"first_name":"Edward","last_name":"Andrews","email":"eandrewsi@shutterfly.com","gender":"Male","ip_address":"245.170.189.51"},
{"id":20,"first_name":"Richard","last_name":"Boyd","email":"rboydj@miibeian.gov.cn","gender":"Male","ip_address":"14.77.118.8"}];
var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount + " females");