var Datagen = Datagen || {};


Datagen.daterange = []

for(var year = 2010; year < 2014; year++ ){
  for(var month = 1; month < 13; month++){
    Datagen.daterange.push(new Date(year, month));
  }
}

var jobs = _.range(1,11).map(function(i){
  return "JOB:"+(i+1273).toString(16);
}); 

var dist = new NormalDistribution(50, 0);


Datagen.rows = [];

jobs.forEach(function(jobid){
  Datagen.daterange.map(function(date){
     Datagen.rows.push([jobid, date, dist.sample(), dist.sample()]);
  });
});


Datagen._rows = [
["Sheffield", new Date ("1/1/2010"),200,15  ],
["Sheffield", new Date ("2/1/2010"),102,14  ],
["Sheffield", new Date ("3/1/2010"),80,16  ],
["Sheffield", new Date ("4/1/2010"),78,17  ],
["Sheffield", new Date ("5/1/2010"),79,14  ],
["Sheffield", new Date ("6/1/2010"),98,13  ],
["Sheffield", new Date ("7/1/2010"),79,14  ],
["Sheffield", new Date ("8/1/2010"),68,12  ],
["Sheffield", new Date ("9/1/2010"),79,13  ],
["Sheffield", new Date ("10/1/2010"),90,18  ],
["Sheffield", new Date ("11/1/2010"),105,21  ],
["Sheffield", new Date ("12/1/2010"),273,22  ],
["Sheffield", new Date ("1/1/2011"),195,19  ],
["Sheffield", new Date ("2/1/2011"),85,14  ],
["Sheffield", new Date ("3/1/2011"),62,16  ],
["Sheffield", new Date ("4/1/2011"),87,14  ],
["Sheffield", new Date ("5/1/2011"),76,13  ],
["Sheffield", new Date ("6/1/2011"),76,14  ],
["Sheffield", new Date ("7/1/2011"),68,14  ],
["Sheffield", new Date ("8/1/2011"),40,13  ],
["Sheffield", new Date ("9/1/2011"),79,15  ],
["Sheffield", new Date ("10/1/2011"),80,17  ],
["Sheffield", new Date ("11/1/2011"),280,23  ],
["Sheffield", new Date ("12/1/2011"),298,30  ],
["Sheffield", new Date ("1/1/2012"),287,22  ],
["Sheffield", new Date ("2/1/2012"),206,18  ],
["Sheffield", new Date ("3/1/2012"),84,14  ],
["Sheffield", new Date ("4/1/2012"),65,13  ],
["Sheffield", new Date ("5/1/2012"),40,13  ],
["Sheffield", new Date ("6/1/2012"),58,66  ],
["Sheffield", new Date ("7/1/2012"),79,14  ],
["Sheffield", new Date ("8/1/2012"),40,13  ],
["Sheffield", new Date ("9/1/2012"),50,16  ],
["Sheffield", new Date ("10/1/2012"),90,19  ],
["Sheffield", new Date ("11/1/2012"),205,24  ],
["Sheffield", new Date ("12/1/2012"),265,28  ],
["Manchester", new Date ("1/1/2010"),1520,25  ],
["Manchester", new Date ("2/1/2010"),736,20  ],
["Manchester", new Date ("3/1/2010"),560,30  ],
["Manchester", new Date ("4/1/2010"),544,35  ],
["Manchester", new Date ("5/1/2010"),552,20  ],
["Manchester", new Date ("6/1/2010"),704,15  ],
["Manchester", new Date ("7/1/2010"),552,20  ],
["Manchester", new Date ("8/1/2010"),464,10  ],
["Manchester", new Date ("9/1/2010"),552,15  ],
["Manchester", new Date ("10/1/2010"),640,40  ],
["Manchester", new Date ("11/1/2010"),760,55  ],
["Manchester", new Date ("12/1/2010"),2104,60  ],
["Manchester", new Date ("1/1/2011"),1480,45  ],
["Manchester", new Date ("2/1/2011"),600,20  ],
["Manchester", new Date ("3/1/2011"),416,30  ],
["Manchester", new Date ("4/1/2011"),616,20  ],
["Manchester", new Date ("5/1/2011"),528,15  ],
["Manchester", new Date ("6/1/2011"),528,20  ],
["Manchester", new Date ("7/1/2011"),464,20  ],
["Manchester", new Date ("8/1/2011"),240,15  ],
["Manchester", new Date ("9/1/2011"),552,25  ],
["Manchester", new Date ("10/1/2011"),560,35  ],
["Manchester", new Date ("11/1/2011"),2160,65  ],
["Manchester", new Date ("12/1/2011"),2304,100  ],
["Manchester", new Date ("1/1/2012"),2216,60  ],
["Manchester", new Date ("2/1/2012"),1568,40  ],
["Manchester", new Date ("3/1/2012"),592,20  ],
["Manchester", new Date ("4/1/2012"),440,15  ],
["Manchester", new Date ("5/1/2012"),240,15  ],
["Manchester", new Date ("6/1/2012"),384,13  ],
["Manchester", new Date ("7/1/2012"),552,20  ],
["Manchester", new Date ("8/1/2012"),240,15  ],
["Manchester", new Date ("9/1/2012"),320,30  ],
["Manchester", new Date ("10/1/2012"),640,45  ],
["Manchester", new Date ("11/1/2012"),1560,70  ],
["Manchester", new Date ("12/1/2012"),2040,90  ],
["Hull", new Date ("1/1/2010"),2000,20  ],
["Hull", new Date ("2/1/2010"),1020,18  ],
["Hull", new Date ("3/1/2010"),800,22  ],
["Hull", new Date ("4/1/2010"),780,24  ],
["Hull", new Date ("5/1/2010"),790,18  ],
["Hull", new Date ("6/1/2010"),980,16  ],
["Hull", new Date ("7/1/2010"),790,18  ],
["Hull", new Date ("8/1/2010"),680,14  ],
["Hull", new Date ("9/1/2010"),790,16  ],
["Hull", new Date ("10/1/2010"),900,26  ],
["Hull", new Date ("11/1/2010"),1050,32  ],
["Hull", new Date ("12/1/2010"),2730,34  ],
["Hull", new Date ("1/1/2011"),1950,28  ],
["Hull", new Date ("2/1/2011"),850,18  ],
["Hull", new Date ("3/1/2011"),620,22  ],
["Hull", new Date ("4/1/2011"),870,18  ],
["Hull", new Date ("5/1/2011"),760,16  ],
["Hull", new Date ("6/1/2011"),760,18  ],
["Hull", new Date ("7/1/2011"),680,18  ],
["Hull", new Date ("8/1/2011"),400,16  ],
["Hull", new Date ("9/1/2011"),790,20  ],
["Hull", new Date ("10/1/2011"),800,24  ],
["Hull", new Date ("11/1/2011"),2800,36  ],
["Hull", new Date ("12/1/2011"),2980,50  ],
["Hull", new Date ("1/1/2012"),2870,34  ],
["Hull", new Date ("2/1/2012"),2060,26  ],
["Hull", new Date ("3/1/2012"),840,18  ],
["Hull", new Date ("4/1/2012"),650,16  ],
["Hull", new Date ("5/1/2012"),400,16  ],
["Hull", new Date ("6/1/2012"),580,122  ],
["Hull", new Date ("7/1/2012"),790,18  ],
["Hull", new Date ("8/1/2012"),400,16  ],
["Hull", new Date ("9/1/2012"),500,22  ],
["Hull", new Date ("10/1/2012"),900,28  ],
["Hull", new Date ("11/1/2012"),2050,38  ],
["Hull", new Date ("12/1/2012"),2650,46  ],
["Birmingham", new Date ("1/1/2010"),1000,22  ],
["Birmingham", new Date ("2/1/2010"),510,25  ],
["Birmingham", new Date ("3/1/2010"),400,25  ],
["Birmingham", new Date ("4/1/2010"),390,28  ],
["Birmingham", new Date ("5/1/2010"),395,25  ],
["Birmingham", new Date ("6/1/2010"),490,19  ],
["Birmingham", new Date ("7/1/2010"),395,25  ],
["Birmingham", new Date ("8/1/2010"),340,19  ],
["Birmingham", new Date ("9/1/2010"),395,16  ],
["Birmingham", new Date ("10/1/2010"),450,37  ],
["Birmingham", new Date ("11/1/2010"),525,40  ],
["Birmingham", new Date ("12/1/2010"),1365,43  ],
["Birmingham", new Date ("1/1/2011"),975,46  ],
["Birmingham", new Date ("2/1/2011"),425,25  ],
["Birmingham", new Date ("3/1/2011"),310,25  ],
["Birmingham", new Date ("4/1/2011"),435,28  ],
["Birmingham", new Date ("5/1/2011"),380,31  ],
["Birmingham", new Date ("6/1/2011"),380,19  ],
["Birmingham", new Date ("7/1/2011"),340,19  ],
["Birmingham", new Date ("8/1/2011"),200,25  ],
["Birmingham", new Date ("9/1/2011"),395,22  ],
["Birmingham", new Date ("10/1/2011"),400,37  ],
["Birmingham", new Date ("11/1/2011"),1400,55  ],
["Birmingham", new Date ("12/1/2011"),1490,70  ],
["Birmingham", new Date ("1/1/2012"),1435,46  ],
["Birmingham", new Date ("2/1/2012"),1030,34  ],
["Birmingham", new Date ("3/1/2012"),420,22  ],
["Birmingham", new Date ("4/1/2012"),325,19  ],
["Birmingham", new Date ("5/1/2012"),200,19  ],
["Birmingham", new Date ("6/1/2012"),290,28  ],
["Birmingham", new Date ("7/1/2012"),395,22  ],
["Birmingham", new Date ("8/1/2012"),200,19  ],
["Birmingham", new Date ("9/1/2012"),250,28  ],
["Birmingham", new Date ("10/1/2012"),450,37  ],
["Birmingham", new Date ("11/1/2012"),1025,52  ],
["Birmingham", new Date ("12/1/2012"),1325,64  ],
["York", new Date ("1/1/2010"),200,15  ],
["York", new Date ("2/1/2010"),102,16  ],
["York", new Date ("3/1/2010"),80,17  ],
["York", new Date ("4/1/2010"),78,16  ],
["York", new Date ("5/1/2010"),79,16  ],
["York", new Date ("6/1/2010"),98,12  ],
["York", new Date ("7/1/2010"),79,14  ],
["York", new Date ("8/1/2010"),68,15  ],
["York", new Date ("9/1/2010"),79,13  ],
["York", new Date ("10/1/2010"),90,21  ],
["York", new Date ("11/1/2010"),105,21  ],
["York", new Date ("12/1/2010"),273,19  ],
["York", new Date ("1/1/2011"),195,23  ],
["York", new Date ("2/1/2011"),85,16  ],
["York", new Date ("3/1/2011"),62,13  ],
["York", new Date ("4/1/2011"),87,18  ],
["York", new Date ("5/1/2011"),76,16  ],
["York", new Date ("6/1/2011"),76,14  ],
["York", new Date ("7/1/2011"),68,12  ],
["York", new Date ("8/1/2011"),40,14  ],
["York", new Date ("9/1/2011"),79,16  ],
["York", new Date ("10/1/2011"),80,21  ],
["York", new Date ("11/1/2011"),280,26  ],
["York", new Date ("12/1/2011"),298,29  ],
["York", new Date ("1/1/2012"),287,23  ],
["York", new Date ("2/1/2012"),206,21  ],
["York", new Date ("3/1/2012"),84,16  ],
["York", new Date ("4/1/2012"),65,14  ],
["York", new Date ("5/1/2012"),40,16  ],
["York", new Date ("6/1/2012"),58,14  ],
["York", new Date ("7/1/2012"),79,16  ],
["York", new Date ("8/1/2012"),40,14  ],
["York", new Date ("9/1/2012"),50,15  ],
["York", new Date ("10/1/2012"),90,15  ],
["York", new Date ("11/1/2012"),205,21  ],
["York", new Date ("12/1/2012"),265,27  ],
["Chester", new Date ("1/1/2010"),100,15  ],
["Chester", new Date ("2/1/2010"),60,16  ],
["Chester", new Date ("3/1/2010"),45,17  ],
["Chester", new Date ("4/1/2010"),31,16  ],
["Chester", new Date ("5/1/2010"),45,16  ],
["Chester", new Date ("6/1/2010"),67,12  ],
["Chester", new Date ("7/1/2010"),24,14  ],
["Chester", new Date ("8/1/2010"),34,15  ],
["Chester", new Date ("9/1/2010"),43,13  ],
["Chester", new Date ("10/1/2010"),39,21  ],
["Chester", new Date ("11/1/2010"),60,21  ],
["Chester", new Date ("12/1/2010"),156,19  ],
["Chester", new Date ("1/1/2011"),101,23  ],
["Chester", new Date ("2/1/2011"),40,16  ],
["Chester", new Date ("3/1/2011"),29,13  ],
["Chester", new Date ("4/1/2011"),21,18  ],
["Chester", new Date ("5/1/2011"),41,16  ],
["Chester", new Date ("6/1/2011"),37,14  ],
["Chester", new Date ("7/1/2011"),32,12  ],
["Chester", new Date ("8/1/2011"),18,14  ],
["Chester", new Date ("9/1/2011"),37,16  ],
["Chester", new Date ("10/1/2011"),42,21  ],
["Chester", new Date ("11/1/2011"),134,26  ],
["Chester", new Date ("12/1/2011"),167,29  ],
["Chester", new Date ("1/1/2012"),165,23  ],
["Chester", new Date ("2/1/2012"),108,21  ],
["Chester", new Date ("3/1/2012"),51,16  ],
["Chester", new Date ("4/1/2012"),38,14  ],
["Chester", new Date ("5/1/2012"),25,16  ],
["Chester", new Date ("6/1/2012"),31,14  ],
["Chester", new Date ("7/1/2012"),27,16  ],
["Chester", new Date ("8/1/2012"),23,14  ],
["Chester", new Date ("9/1/2012"),29,15  ],
["Chester", new Date ("10/1/2012"),48,15  ],
["Chester", new Date ("11/1/2012"),111,21  ],
["Chester", new Date ("12/1/2012"),145,27  ],
["Bradford", new Date ("1/1/2010"),500,60  ],
["Bradford", new Date ("2/1/2010"),300,70  ],
["Bradford", new Date ("3/1/2010"),225,80  ],
["Bradford", new Date ("4/1/2010"),155,70  ],
["Bradford", new Date ("5/1/2010"),225,70  ],
["Bradford", new Date ("6/1/2010"),335,30  ],
["Bradford", new Date ("7/1/2010"),120,50  ],
["Bradford", new Date ("8/1/2010"),170,60  ],
["Bradford", new Date ("9/1/2010"),215,40  ],
["Bradford", new Date ("10/1/2010"),195,120  ],
["Bradford", new Date ("11/1/2010"),300,120  ],
["Bradford", new Date ("12/1/2010"),780,100  ],
["Bradford", new Date ("1/1/2011"),505,140  ],
["Bradford", new Date ("2/1/2011"),200,70  ],
["Bradford", new Date ("3/1/2011"),145,40  ],
["Bradford", new Date ("4/1/2011"),105,90  ],
["Bradford", new Date ("5/1/2011"),205,70  ],
["Bradford", new Date ("6/1/2011"),185,50  ],
["Bradford", new Date ("7/1/2011"),160,30  ],
["Bradford", new Date ("8/1/2011"),90,50  ],
["Bradford", new Date ("9/1/2011"),185,70  ],
["Bradford", new Date ("10/1/2011"),210,120  ],
["Bradford", new Date ("11/1/2011"),670,170  ],
["Bradford", new Date ("12/1/2011"),835,200  ],
["Bradford", new Date ("1/1/2012"),825,140  ],
["Bradford", new Date ("2/1/2012"),540,120  ],
["Bradford", new Date ("3/1/2012"),255,70  ],
["Bradford", new Date ("4/1/2012"),190,50  ],
["Bradford", new Date ("5/1/2012"),125,70  ],
["Bradford", new Date ("6/1/2012"),155,50  ],
["Bradford", new Date ("7/1/2012"),135,70  ],
["Bradford", new Date ("8/1/2012"),115,50  ],
["Bradford", new Date ("9/1/2012"),145,60  ],
["Bradford", new Date ("10/1/2012"),240,60  ],
["Bradford", new Date ("11/1/2012"),555,120  ],
["Bradford", new Date ("12/1/2012"),725,180  ],
["Bristol", new Date ("1/1/2010"),440,16  ],
["Bristol", new Date ("2/1/2010"),342,17  ],
["Bristol", new Date ("3/1/2010"),337,18  ],
["Bristol", new Date ("4/1/2010"),327,17  ],
["Bristol", new Date ("5/1/2010"),326,17  ],
["Bristol", new Date ("6/1/2010"),351,14  ],
["Bristol", new Date ("7/1/2010"),335,15  ],
["Bristol", new Date ("8/1/2010"),319,16  ],
["Bristol", new Date ("9/1/2010"),321,14  ],
["Bristol", new Date ("10/1/2010"),351,25  ],
["Bristol", new Date ("11/1/2010"),361,24  ],
["Bristol", new Date ("12/1/2010"),535,21  ],
["Bristol", new Date ("1/1/2011"),465,25  ],
["Bristol", new Date ("2/1/2011"),341,18  ],
["Bristol", new Date ("3/1/2011"),322,15  ],
["Bristol", new Date ("4/1/2011"),348,18  ],
["Bristol", new Date ("5/1/2011"),334,17  ],
["Bristol", new Date ("6/1/2011"),329,15  ],
["Bristol", new Date ("7/1/2011"),331,14  ],
["Bristol", new Date ("8/1/2011"),302,13  ],
["Bristol", new Date ("9/1/2011"),339,17  ],
["Bristol", new Date ("10/1/2011"),341,23  ],
["Bristol", new Date ("11/1/2011"),529,27  ],
["Bristol", new Date ("12/1/2011"),530,31  ],
["Bristol", new Date ("1/1/2012"),516,24  ],
["Bristol", new Date ("2/1/2012"),450,23  ],
["Bristol", new Date ("3/1/2012"),346,19  ],
["Bristol", new Date ("4/1/2012"),325,16  ],
["Bristol", new Date ("5/1/2012"),305,17  ],
["Bristol", new Date ("6/1/2012"),320,15  ],
["Bristol", new Date ("7/1/2012"),337,17  ],
["Bristol", new Date ("8/1/2012"),303,15  ],
["Bristol", new Date ("9/1/2012"),311,14  ],
["Bristol", new Date ("10/1/2012"),352,17  ],
["Bristol", new Date ("11/1/2012"),462,24  ],
["Bristol", new Date ("12/1/2012"),505,28  ],
["Cardiff", new Date ("1/1/2010"),900,9  ],
["Cardiff", new Date ("2/1/2010"),540,7  ],
["Cardiff", new Date ("3/1/2010"),404,5  ],
["Cardiff", new Date ("4/1/2010"),278,6  ],
["Cardiff", new Date ("5/1/2010"),404,8  ],
["Cardiff", new Date ("6/1/2010"),602,7  ],
["Cardiff", new Date ("7/1/2010"),216,6  ],
["Cardiff", new Date ("8/1/2010"),306,8  ],
["Cardiff", new Date ("9/1/2010"),386,6  ],
["Cardiff", new Date ("10/1/2010"),350,10  ],
["Cardiff", new Date ("11/1/2010"),540,15  ],
["Cardiff", new Date ("12/1/2010"),1404,18  ],
["Cardiff", new Date ("1/1/2011"),908,10  ],
["Cardiff", new Date ("2/1/2011"),360,6  ],
["Cardiff", new Date ("3/1/2011"),260,2  ],
["Cardiff", new Date ("4/1/2011"),188,1  ],
["Cardiff", new Date ("5/1/2011"),368,3  ],
["Cardiff", new Date ("6/1/2011"),332,5  ],
["Cardiff", new Date ("7/1/2011"),288,7  ],
["Cardiff", new Date ("8/1/2011"),162,4  ],
["Cardiff", new Date ("9/1/2011"),332,5  ],
["Cardiff", new Date ("10/1/2011"),378,23  ],
["Cardiff", new Date ("11/1/2011"),1206,5  ],
["Cardiff", new Date ("12/1/2011"),1502,3  ],
["Cardiff", new Date ("1/1/2012"),1484,1  ],
["Cardiff", new Date ("2/1/2012"),972,16  ],
["Cardiff", new Date ("3/1/2012"),458,6  ],
["Cardiff", new Date ("4/1/2012"),342,4  ],
["Cardiff", new Date ("5/1/2012"),224,5  ],
["Cardiff", new Date ("6/1/2012"),278,4  ],
["Cardiff", new Date ("7/1/2012"),242,3  ],
["Cardiff", new Date ("8/1/2012"),206,2  ],
["Cardiff", new Date ("9/1/2012"),260,1  ],
["Cardiff", new Date ("10/1/2012"),432,18  ],
["Cardiff", new Date ("11/1/2012"),998,5  ],
["Cardiff", new Date ("12/1/2012"),999,1  ],
["Leeds", new Date ("1/1/2010"),1007,30  ],
["Leeds", new Date ("2/1/2010"),612,26  ],
["Leeds", new Date ("3/1/2010"),480,34  ],
["Leeds", new Date ("4/1/2010"),468,38  ],
["Leeds", new Date ("5/1/2010"),474,26  ],
["Leeds", new Date ("6/1/2010"),588,22  ],
["Leeds", new Date ("7/1/2010"),474,26  ],
["Leeds", new Date ("8/1/2010"),408,18  ],
["Leeds", new Date ("9/1/2010"),474,22  ],
["Leeds", new Date ("10/1/2010"),540,42  ],
["Leeds", new Date ("11/1/2010"),630,54  ],
["Leeds", new Date ("12/1/2010"),1009,58  ],
["Leeds", new Date ("1/1/2011"),1170,46  ],
["Leeds", new Date ("2/1/2011"),510,26  ],
["Leeds", new Date ("3/1/2011"),372,34  ],
["Leeds", new Date ("4/1/2011"),522,26  ],
["Leeds", new Date ("5/1/2011"),456,22  ],
["Leeds", new Date ("6/1/2011"),456,26  ],
["Leeds", new Date ("7/1/2011"),408,26  ],
["Leeds", new Date ("8/1/2011"),240,22  ],
["Leeds", new Date ("9/1/2011"),474,30  ],
["Leeds", new Date ("10/1/2011"),480,38  ],
["Leeds", new Date ("11/1/2011"),900,62  ],
["Leeds", new Date ("12/1/2011"),1034,90  ],
["Leeds", new Date ("1/1/2012"),1069,58  ],
["Leeds", new Date ("2/1/2012"),979,42  ],
["Leeds", new Date ("3/1/2012"),504,26  ],
["Leeds", new Date ("4/1/2012"),390,22  ],
["Leeds", new Date ("5/1/2012"),240,22  ],
["Leeds", new Date ("6/1/2012"),348,24  ],
["Leeds", new Date ("7/1/2012"),474,26  ],
["Leeds", new Date ("8/1/2012"),240,22  ],
["Leeds", new Date ("9/1/2012"),300,34  ],
["Leeds", new Date ("10/1/2012"),540,46  ],
["Leeds", new Date ("11/1/2012"),1010,66  ],
["Leeds", new Date ("12/1/2012"),1025,82  ]
];
