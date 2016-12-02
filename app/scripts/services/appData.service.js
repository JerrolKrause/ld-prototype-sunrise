angular.module('sdpApp')

        .service('appDataSvc', function () {
          'user strict';
          var data = {
            loanData : [],
            stats : {
              green : 0,
              yellow : 0,
              red: 0
            }
          };

          var nameData = [{"id":1,"first_name":"Jean","last_name":"Harvey","email":"jharvey0@nps.gov","gender":"Female","ip_address":"253.228.77.104"},{"id":2,"first_name":"Judith","last_name":"Phillips","email":"jphillips1@xrea.com","gender":"Female","ip_address":"149.143.36.246"},{"id":3,"first_name":"Jessica","last_name":"Rodriguez","email":"jrodriguez2@cnbc.com","gender":"Female","ip_address":"176.231.106.139"},{"id":4,"first_name":"Donna","last_name":"Bailey","email":"dbailey3@npr.org","gender":"Female","ip_address":"164.85.88.223"},{"id":5,"first_name":"Martin","last_name":"Black","email":"mblack4@google.com.hk","gender":"Male","ip_address":"224.233.191.26"},{"id":6,"first_name":"Cynthia","last_name":"Morrison","email":"cmorrison5@va.gov","gender":"Female","ip_address":"239.112.46.225"},{"id":7,"first_name":"Evelyn","last_name":"Jackson","email":"ejackson6@skype.com","gender":"Female","ip_address":"13.32.233.10"},{"id":8,"first_name":"Teresa","last_name":"Howell","email":"thowell7@zdnet.com","gender":"Female","ip_address":"144.241.129.149"},{"id":9,"first_name":"Lisa","last_name":"Andrews","email":"landrews8@netscape.com","gender":"Female","ip_address":"62.10.104.115"},{"id":10,"first_name":"Douglas","last_name":"Pierce","email":"dpierce9@prnewswire.com","gender":"Male","ip_address":"120.223.82.30"},{"id":11,"first_name":"Richard","last_name":"Payne","email":"rpaynea@dyndns.org","gender":"Male","ip_address":"46.15.222.248"},{"id":12,"first_name":"Steven","last_name":"Elliott","email":"selliottb@google.de","gender":"Male","ip_address":"103.41.27.80"},{"id":13,"first_name":"Anna","last_name":"Holmes","email":"aholmesc@artisteer.com","gender":"Female","ip_address":"229.228.183.204"},{"id":14,"first_name":"Lori","last_name":"Dixon","email":"ldixond@blogtalkradio.com","gender":"Female","ip_address":"70.209.79.84"},{"id":15,"first_name":"Sarah","last_name":"Romero","email":"sromeroe@berkeley.edu","gender":"Female","ip_address":"109.25.166.166"},{"id":16,"first_name":"Carolyn","last_name":"Roberts","email":"crobertsf@lulu.com","gender":"Female","ip_address":"48.187.21.248"},{"id":17,"first_name":"Justin","last_name":"Marshall","email":"jmarshallg@sciencedaily.com","gender":"Male","ip_address":"108.232.111.161"},{"id":18,"first_name":"Albert","last_name":"Bowman","email":"abowmanh@ucoz.ru","gender":"Male","ip_address":"35.254.211.69"},{"id":19,"first_name":"Gloria","last_name":"Gonzalez","email":"ggonzalezi@ning.com","gender":"Female","ip_address":"52.177.119.21"},{"id":20,"first_name":"Ruby","last_name":"Carroll","email":"rcarrollj@si.edu","gender":"Female","ip_address":"93.189.1.58"},{"id":21,"first_name":"William","last_name":"Perez","email":"wperezk@mail.ru","gender":"Male","ip_address":"175.14.7.111"},{"id":22,"first_name":"Brian","last_name":"Perry","email":"bperryl@gravatar.com","gender":"Male","ip_address":"78.123.129.151"},{"id":23,"first_name":"Dennis","last_name":"Cox","email":"dcoxm@baidu.com","gender":"Male","ip_address":"101.24.191.97"},{"id":24,"first_name":"Ryan","last_name":"Cooper","email":"rcoopern@quantcast.com","gender":"Male","ip_address":"225.238.247.141"},{"id":25,"first_name":"Harold","last_name":"Turner","email":"hturnero@amazon.co.uk","gender":"Male","ip_address":"203.21.151.239"},{"id":26,"first_name":"Jeffrey","last_name":"Webb","email":"jwebbp@smugmug.com","gender":"Male","ip_address":"21.188.24.127"},{"id":27,"first_name":"Janice","last_name":"Robertson","email":"jrobertsonq@example.com","gender":"Female","ip_address":"91.170.132.14"},{"id":28,"first_name":"Julia","last_name":"Castillo","email":"jcastillor@fastcompany.com","gender":"Female","ip_address":"217.154.12.0"},{"id":29,"first_name":"Robert","last_name":"Wallace","email":"rwallaces@sbwire.com","gender":"Male","ip_address":"211.242.153.29"},{"id":30,"first_name":"Jane","last_name":"Snyder","email":"jsnydert@rambler.ru","gender":"Female","ip_address":"81.189.237.219"},{"id":31,"first_name":"Paul","last_name":"Holmes","email":"pholmesu@ycombinator.com","gender":"Male","ip_address":"93.220.88.77"},{"id":32,"first_name":"Harold","last_name":"Mccoy","email":"hmccoyv@digg.com","gender":"Male","ip_address":"156.129.42.192"},{"id":33,"first_name":"Annie","last_name":"Greene","email":"agreenew@yolasite.com","gender":"Female","ip_address":"246.36.164.213"},{"id":34,"first_name":"Rebecca","last_name":"Flores","email":"rfloresx@china.com.cn","gender":"Female","ip_address":"180.83.15.8"},{"id":35,"first_name":"Alice","last_name":"Woods","email":"awoodsy@livejournal.com","gender":"Female","ip_address":"4.227.94.190"},{"id":36,"first_name":"Barbara","last_name":"Willis","email":"bwillisz@unesco.org","gender":"Female","ip_address":"149.240.149.95"},{"id":37,"first_name":"Robert","last_name":"Vasquez","email":"rvasquez10@geocities.com","gender":"Male","ip_address":"24.166.10.197"},{"id":38,"first_name":"Lois","last_name":"Diaz","email":"ldiaz11@walmart.com","gender":"Female","ip_address":"65.247.146.7"},{"id":39,"first_name":"Cheryl","last_name":"Chavez","email":"cchavez12@youtube.com","gender":"Female","ip_address":"176.35.68.105"},{"id":40,"first_name":"Ruth","last_name":"Reid","email":"rreid13@redcross.org","gender":"Female","ip_address":"153.81.163.53"},{"id":41,"first_name":"Lisa","last_name":"Campbell","email":"lcampbell14@com.com","gender":"Female","ip_address":"163.99.32.54"},{"id":42,"first_name":"Irene","last_name":"Robinson","email":"irobinson15@tamu.edu","gender":"Female","ip_address":"224.29.2.224"},{"id":43,"first_name":"Angela","last_name":"Evans","email":"aevans16@plala.or.jp","gender":"Female","ip_address":"12.7.212.223"},{"id":44,"first_name":"Willie","last_name":"Price","email":"wprice17@bing.com","gender":"Male","ip_address":"189.199.246.114"},{"id":45,"first_name":"Jennifer","last_name":"Bailey","email":"jbailey18@jimdo.com","gender":"Female","ip_address":"98.67.242.164"},{"id":46,"first_name":"Rachel","last_name":"Ryan","email":"rryan19@imageshack.us","gender":"Female","ip_address":"155.154.175.156"},{"id":47,"first_name":"Walter","last_name":"Henry","email":"whenry1a@scribd.com","gender":"Male","ip_address":"16.148.28.100"},{"id":48,"first_name":"Harry","last_name":"Medina","email":"hmedina1b@imgur.com","gender":"Male","ip_address":"158.141.14.112"},{"id":49,"first_name":"Patrick","last_name":"Greene","email":"pgreene1c@jigsy.com","gender":"Male","ip_address":"150.2.151.163"},{"id":50,"first_name":"Rebecca","last_name":"Schmidt","email":"rschmidt1d@china.com.cn","gender":"Female","ip_address":"155.108.18.54"},{"id":51,"first_name":"Susan","last_name":"Gordon","email":"sgordon1e@jiathis.com","gender":"Female","ip_address":"58.186.163.93"},{"id":52,"first_name":"Kimberly","last_name":"King","email":"kking1f@comcast.net","gender":"Female","ip_address":"178.188.132.26"},{"id":53,"first_name":"George","last_name":"Ruiz","email":"gruiz1g@mail.ru","gender":"Male","ip_address":"103.226.93.48"},{"id":54,"first_name":"Joseph","last_name":"Matthews","email":"jmatthews1h@google.fr","gender":"Male","ip_address":"47.92.49.7"},{"id":55,"first_name":"Amanda","last_name":"Lee","email":"alee1i@oakley.com","gender":"Female","ip_address":"16.118.107.19"},{"id":56,"first_name":"Justin","last_name":"Brown","email":"jbrown1j@cdbaby.com","gender":"Male","ip_address":"72.122.210.139"},{"id":57,"first_name":"David","last_name":"Harvey","email":"dharvey1k@irs.gov","gender":"Male","ip_address":"213.252.132.75"},{"id":58,"first_name":"Chris","last_name":"Ferguson","email":"cferguson1l@latimes.com","gender":"Male","ip_address":"93.15.11.3"},{"id":59,"first_name":"Virginia","last_name":"Gibson","email":"vgibson1m@etsy.com","gender":"Female","ip_address":"254.134.138.237"},{"id":60,"first_name":"William","last_name":"Perez","email":"wperez1n@paginegialle.it","gender":"Male","ip_address":"187.183.145.177"},{"id":61,"first_name":"Sara","last_name":"Wagner","email":"swagner1o@umich.edu","gender":"Female","ip_address":"169.204.145.125"},{"id":62,"first_name":"Kelly","last_name":"Reid","email":"kreid1p@dion.ne.jp","gender":"Female","ip_address":"25.233.41.42"},{"id":63,"first_name":"Laura","last_name":"Stewart","email":"lstewart1q@flavors.me","gender":"Female","ip_address":"58.51.205.245"},{"id":64,"first_name":"Ralph","last_name":"Diaz","email":"rdiaz1r@imdb.com","gender":"Male","ip_address":"218.59.50.186"},{"id":65,"first_name":"Scott","last_name":"Fox","email":"sfox1s@bloglines.com","gender":"Male","ip_address":"153.135.212.3"},{"id":66,"first_name":"Kevin","last_name":"Rivera","email":"krivera1t@artisteer.com","gender":"Male","ip_address":"72.11.191.131"},{"id":67,"first_name":"Rachel","last_name":"Carroll","email":"rcarroll1u@quantcast.com","gender":"Female","ip_address":"15.218.185.30"},{"id":68,"first_name":"Deborah","last_name":"Cole","email":"dcole1v@flavors.me","gender":"Female","ip_address":"32.238.168.56"},{"id":69,"first_name":"Joyce","last_name":"Fernandez","email":"jfernandez1w@virginia.edu","gender":"Female","ip_address":"244.225.127.159"},{"id":70,"first_name":"Julia","last_name":"Montgomery","email":"jmontgomery1x@nydailynews.com","gender":"Female","ip_address":"108.112.23.44"},{"id":71,"first_name":"Clarence","last_name":"Owens","email":"cowens1y@eventbrite.com","gender":"Male","ip_address":"36.77.159.23"},{"id":72,"first_name":"Evelyn","last_name":"Medina","email":"emedina1z@tamu.edu","gender":"Female","ip_address":"113.101.124.59"},{"id":73,"first_name":"Howard","last_name":"Hansen","email":"hhansen20@omniture.com","gender":"Male","ip_address":"245.133.79.13"},{"id":74,"first_name":"Christine","last_name":"James","email":"cjames21@issuu.com","gender":"Female","ip_address":"6.236.39.43"},{"id":75,"first_name":"Ashley","last_name":"Freeman","email":"afreeman22@mozilla.org","gender":"Female","ip_address":"44.170.67.162"},{"id":76,"first_name":"Michael","last_name":"Carroll","email":"mcarroll23@phpbb.com","gender":"Male","ip_address":"86.224.45.167"},{"id":77,"first_name":"Victor","last_name":"Daniels","email":"vdaniels24@marriott.com","gender":"Male","ip_address":"159.45.57.148"},{"id":78,"first_name":"Willie","last_name":"Campbell","email":"wcampbell25@usa.gov","gender":"Male","ip_address":"190.149.96.13"},{"id":79,"first_name":"Laura","last_name":"Cook","email":"lcook26@wix.com","gender":"Female","ip_address":"72.214.104.130"},{"id":80,"first_name":"Johnny","last_name":"Burke","email":"jburke27@samsung.com","gender":"Male","ip_address":"214.232.222.5"},{"id":81,"first_name":"Evelyn","last_name":"Fox","email":"efox28@stumbleupon.com","gender":"Female","ip_address":"49.216.105.237"},{"id":82,"first_name":"Irene","last_name":"Sims","email":"isims29@livejournal.com","gender":"Female","ip_address":"68.171.6.120"},{"id":83,"first_name":"Earl","last_name":"Owens","email":"eowens2a@ftc.gov","gender":"Male","ip_address":"248.94.97.240"},{"id":84,"first_name":"Edward","last_name":"Harris","email":"eharris2b@mail.ru","gender":"Male","ip_address":"10.75.124.80"},{"id":85,"first_name":"Norma","last_name":"Williams","email":"nwilliams2c@trellian.com","gender":"Female","ip_address":"191.212.150.8"},{"id":86,"first_name":"Kenneth","last_name":"Sims","email":"ksims2d@usa.gov","gender":"Male","ip_address":"150.253.250.181"},{"id":87,"first_name":"Catherine","last_name":"Arnold","email":"carnold2e@un.org","gender":"Female","ip_address":"30.235.154.164"},{"id":88,"first_name":"Dennis","last_name":"Hughes","email":"dhughes2f@jimdo.com","gender":"Male","ip_address":"144.191.180.192"},{"id":89,"first_name":"Jack","last_name":"Meyer","email":"jmeyer2g@sohu.com","gender":"Male","ip_address":"76.230.15.99"},{"id":90,"first_name":"Ralph","last_name":"Hudson","email":"rhudson2h@statcounter.com","gender":"Male","ip_address":"133.115.167.0"},{"id":91,"first_name":"Marilyn","last_name":"Collins","email":"mcollins2i@facebook.com","gender":"Female","ip_address":"175.165.125.10"},{"id":92,"first_name":"Mark","last_name":"Andrews","email":"mandrews2j@examiner.com","gender":"Male","ip_address":"92.246.111.85"},{"id":93,"first_name":"Maria","last_name":"Rice","email":"mrice2k@live.com","gender":"Female","ip_address":"99.115.9.109"},{"id":94,"first_name":"George","last_name":"Hughes","email":"ghughes2l@npr.org","gender":"Male","ip_address":"5.191.244.227"},{"id":95,"first_name":"Betty","last_name":"Wells","email":"bwells2m@hostgator.com","gender":"Female","ip_address":"129.11.127.58"},{"id":96,"first_name":"Marilyn","last_name":"Marshall","email":"mmarshall2n@quantcast.com","gender":"Female","ip_address":"63.174.199.211"},{"id":97,"first_name":"Marilyn","last_name":"Sims","email":"msims2o@bloglovin.com","gender":"Female","ip_address":"2.105.210.140"},{"id":98,"first_name":"Sara","last_name":"Little","email":"slittle2p@columbia.edu","gender":"Female","ip_address":"198.183.216.40"},{"id":99,"first_name":"Clarence","last_name":"Reyes","email":"creyes2q@google.com","gender":"Male","ip_address":"238.8.9.101"},{"id":100,"first_name":"Patrick","last_name":"Smith","email":"psmith2r@tumblr.com","gender":"Male","ip_address":"95.234.187.99"}]
          var docNames = ['1099R',          'Alimony ',          'Annuity statement',          'Award letter',          'Business tax returns (1120s)',          'Capital gains income',          'Child support income ',          'Foreign based income',          'Foster care ',          'Interest income ',          'IRA statement',          'K1',          'Notes receivable',          'Partnership tax returns (1065s)',          'Paystub',          'Pension document',          'Personal tax returns (1040s)',          'Rental income',          'Retirement statement',          'Social security benefit statement',          'Temporary leave income',          'Tip income',          'Trust income',          'Unemployment benefits',          'VA benefit statement','W2'];
          var docFileNames = ['foreign-tax-credit.png','ira-statement.png','k1.png','1099R.gif','annuity.jpg','award.jpg','1120.jpg'];
          var loanStatus = ['STP','Docs Out','Pending UW','Lead','PENCIL'];
          var docStatus = ['new','approved','requested'];
          var queueStatus = ['approved','approved','declined','not-reviewed'];
          var notes = ['','','','','Borrower reuploaded this','Document is blurry, re-requesting','Document numbers to not match up']

          //Generate 50 entries
          for (i = 0; i < 54; i++) {
            var me = {}
            //Loan Number
            if(i !== 0){
              me.loanNum = 10029384 + Math.floor((Math.random() * 100) + 1);
            } else {
              me.loanNum = 10029384;
            }

            //Time in queue
            me.inQueue = Math.floor((Math.random() * 7) + 1);

            if(me.inQueue <= 2 ){
              data.stats.green ++;
            } else if(me.inQueue <= 4 ){
              data.stats.yellow ++;
            } else {
              data.stats.red ++;
            }

            //Docs
            me.docs = [];
            for (e = 0; e < Math.floor((Math.random() * 80) + 1); e++) {
              var docName = {
                label : docNames[Math.floor(Math.random()*docNames.length)],
                image : docFileNames[Math.floor(Math.random()*docFileNames.length)]
              }

              docName.status = docStatus[Math.floor(Math.random()*docStatus.length)];
              docName.queueStatus = queueStatus[Math.floor(Math.random()*queueStatus.length)];

              if(docName.queueStatus === 'approved'){
                docName.queueStatus2 = queueStatus[Math.floor(Math.random()*queueStatus.length)];
              } else {
                docName.queueStatus2 = false;
              }


              docName.notes = notes[Math.floor(Math.random()*notes.length)]

              me.docs.push(docName);
            }

            //Status
            me.loanStatus = loanStatus[Math.floor(Math.random()*loanStatus.length)];

            //Array of borrowers
            me.borrowers = []
            for (f= 0; f < Math.floor((Math.random() * 3) + 1); f++) {
              var name = nameData[Math.floor(Math.random()*nameData.length)];
              var name2 = name.first_name + ' ' + name.last_name;
              me.borrowers.push(name2);
              if(f === 0){
                me.borrowerSingle = name2;
              }


            }



            data.loanData.push(me);
          }


          data.docNames = docNames;
          console.log(data);
          return data;

        });
