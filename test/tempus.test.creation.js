QUnit.module('Date intializing');

covers(Tempus.prototype, 'Tempus', 'constructor', 'set');
QUnit.test('Timestamp initialization should be idemptotent', function () {

    equal(+new Tempus(0), 0, '0');
    equal(+new Tempus(1315774123519), 1315774123519, '1315774123519');
    equal(+new Tempus(1337326430631), 1337326430631, '1337326430631');

});
QUnit.test('Date initialise with timestamp', function () {

    equal(''+new FakeDate(+new Tempus(0)), ''+new FakeDate(0), '0');
    equal(''+new FakeDate(+new Tempus(1315774123519)), ''+new FakeDate(1315774123519), '1315774123519');

});

QUnit.test('Date initialise with GMT string', function () {

    equal(new Tempus('Sun, 11 Sep 2011 21:48:43 GMT').toISOString(), '2011-09-11T21:48:43.000+0000', 'Sun, 11 Sep 2011 21:48:43 GMT');
    equal(new Tempus('Sat Jan 14 2012 18:10:32 GMT+0000 (GMT)').toISOString(), '2012-01-14T18:10:32.000+0000', 'Sat Jan 14 2012 18:10:32 GMT+0000 (GMT)');

});

QUnit.test('Date initialise with number arguments', function () {

    equal(''+new FakeDate(+new Tempus(2011, 8)), ''+new FakeDate(2011, 8), '2011, 8');
    equal(''+new FakeDate(+new Tempus(2011, 8, 11)), ''+new FakeDate(2011, 8, 11), '2011, 8, 11');
    equal(''+new FakeDate(+new Tempus(2011, 8, 11, 20)), ''+new FakeDate(2011, 8, 11, 20), '2011, 8, 11, 20');
    equal(''+new FakeDate(+new Tempus(2011, 8, 11, 20, 48)), ''+new FakeDate(2011, 8, 11, 20, 48), '2011, 8, 11, 20, 48');
    equal(''+new FakeDate(+new Tempus(2011, 8, 11, 20, 48, 43)), ''+new FakeDate(2011, 8, 11, 20, 48, 43), '2011, 8, 11, 20, 48, 43');
    equal(''+new FakeDate(+new Tempus(2011, 8, 11, 20, 48, 43, 100)), ''+new FakeDate(2011, 8, 11, 20, 48, 43, 100), '2011, 8, 11, 20, 48, 43, 100');

});


QUnit.test('Date initialise with Tempus/Date instances', function () {
    var newdate = new Tempus();

    equal(''+new FakeDate(+new Tempus(newdate)), ''+new FakeDate(+newdate), 'Tempus');
    equal(''+new FakeDate(+new Tempus(new FakeDate())), String(new FakeDate()), 'Date');

});

QUnit.test('Date initialise with first argument array extrapolation', function () {
    var newdate = new Tempus();

    equal(''+new FakeDate(+new Tempus([2011, 8])), ''+new FakeDate(2011, 8), '[2011, 8]');
    equal(''+new FakeDate(+new Tempus([2011, 8, 11])), ''+new FakeDate(2011, 8, 11), '[2011, 8, 11]');
    equal(''+new FakeDate(+new Tempus([2011, 8, 11, 20])), ''+new FakeDate(2011, 8, 11, 20), '[2011, 8, 11, 20]');
    equal(''+new FakeDate(+new Tempus([2011, 8, 11, 20, 48])), ''+new FakeDate(2011, 8, 11, 20, 48), '[2011, 8, 11, 20, 48]');
    equal(''+new FakeDate(+new Tempus([2011, 8, 11, 20, 48, 43])), ''+new FakeDate(2011, 8, 11, 20, 48, 43), '[2011, 8, 11, 20, 48, 43]');
    equal(''+new FakeDate(+new Tempus([2011, 8, 11, 20, 48, 43, 100])), ''+new FakeDate(2011, 8, 11, 20, 48, 43, 100), '[2011, 8, 11, 20, 48, 43, 100]');
    equal(''+new FakeDate(+new Tempus([newdate])), ''+new FakeDate(newdate), '[Tempus]');
    equal(''+new FakeDate(+new Tempus([new FakeDate()])), ''+new FakeDate(new FakeDate()), '[Date]');

});

QUnit.test('Date initialise with first argument as Arguments extrapolation', function () {
    var newdate = new Tempus();

    function argumentFactory() { return arguments; }

    equal(''+new FakeDate(+new Tempus(argumentFactory(2011, 8))), ''+new FakeDate(2011, 8), '[2011, 8]');
    equal(''+new FakeDate(+new Tempus(argumentFactory(2011, 8, 11))), ''+new FakeDate(2011, 8, 11), '[2011, 8, 11]');
    equal(''+new FakeDate(+new Tempus(argumentFactory(2011, 8, 11, 20))), ''+new FakeDate(2011, 8, 11, 20), '[2011, 8, 11, 20]');
    equal(''+new FakeDate(+new Tempus(argumentFactory(2011, 8, 11, 20, 48))), ''+new FakeDate(2011, 8, 11, 20, 48), '[2011, 8, 11, 20, 48]');
    equal(''+new FakeDate(+new Tempus(argumentFactory(2011, 8, 11, 20, 48, 43))), ''+new FakeDate(2011, 8, 11, 20, 48, 43), '[2011, 8, 11, 20, 48, 43]');
    equal(''+new FakeDate(+new Tempus(argumentFactory(2011, 8, 11, 20, 48, 43, 100))), ''+new FakeDate(2011, 8, 11, 20, 48, 43, 100), '[2011, 8, 11, 20, 48, 43, 100]');
    equal(''+new FakeDate(+new Tempus(argumentFactory(newdate))), ''+new FakeDate(newdate), '[Tempus]');
    equal(''+new FakeDate(+new Tempus(argumentFactory(new FakeDate()))), ''+new FakeDate(new FakeDate()), '[Date]');

});

QUnit.test('Initialise date without "new"', function () {
    
    equal(Tempus() instanceof Tempus, true);
    equal(Number(Tempus([2011, 8])), Number(new Tempus([2011, 8])));
    equal(Number(Tempus(2011, 8)), Number(new Tempus(2011, 8)));
    equal(Number(Tempus('Sun, 11 Sep 2011 21:48:43 GMT')), Number(new Tempus('Sun, 11 Sep 2011 21:48:43 GMT')));
});

QUnit.test('Date initialise with additional tz param', function () {
    var newdate = new Tempus(2011, 8, 11, 20, 48, 43, 100, -120);
    
    equal(newdate.timezoneOffset(), -120, 'timezoneOffset is -120');
    equal(newdate.hours(), 20, 'hours');
    equal(newdate.UTCHours(), 18, 'UTCHours');
});

QUnit.module('Date parsing');

QUnit.test('Initialise with ISO8601 dates', function () {
    var newdate = new Tempus('2011-09-11');
    equal(newdate.toISODateString(), '2011-09-11', 'ISO8601 date setting is idemptotent (2011-09-11)');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1315699200000), "2011-09-11 (" + String(newdate) + ")");

    newdate = new Tempus('2008-01-01');
    equal(newdate.toISODateString(), '2008-01-01', 'ISO8601 date setting is idemptotent (2008-01-01)');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1199145600000), "2008-01-01 (" + String(newdate) + ")");

    newdate = new Tempus('2024-12-31');
    equal(newdate.toISODateString(), '2024-12-31', 'ISO8601 date setting is idemptotent (2024-12-31)');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1735603200000), "2024-12-31 (" + String(newdate) + ")");

    newdate = new Tempus('1986-04-24');
    equal(newdate.toISODateString(), '1986-04-24', 'ISO8601 date setting is idemptotent (1986-04-24)');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(514684800000), "1986-04-24 (" + String(newdate) + ")");

    newdate = new Tempus('2008-02-28');
    equal(newdate.toISODateString(), '2008-02-28', 'ISO8601 date setting is idemptotent (2008-02-28)');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1204156800000), "2008-02-29 (" + String(newdate) + ")");

    newdate = new Tempus('1970-01-01');
    equal(newdate.toISODateString(), '1970-01-01', 'ISO8601 date setting is idemptotent (1970-01-01)');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(0), "1970-01-01 (" + String(newdate) + ")");

    newdate = new Tempus('2012-12-21');
    equal(newdate.toISODateString(), '2012-12-21', 'ISO8601 date setting is idemptotent (2012-12-21)');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1356048000000), "2012-12-21 (" + String(newdate) + ")");
});

QUnit.test('Initialise with ISO8601 datetimes', function () {
    var newdate = new Tempus('2011-09-11T20:48:43.519Z');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1315774123519), "2011-09-11T20:48:43.519Z (" + String(newdate) + ")");

    newdate = new Tempus('2008-01-01T12:12:12.111Z');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1199189532111), "2008-01-01T12:12:12.111Z (" + String(newdate) + ")");

    newdate = new Tempus('2024-12-31T11:59:59.999Z');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1735646399999), "2024-12-31T11:59:59.999Z (" + String(newdate) + ")");

    newdate = new Tempus('1986-04-24T08:55:32.216+0100');
    equal(newdate.toISOString(), '1986-04-24T08:55:32.216+0100', 'ISO8601 date setting is idemptotent (1986-04-24T08:55:32.216+0100)');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(514713332216), "1986-04-24T08:55:32.216+0100 (" + String(newdate) + ")");

    newdate = new Tempus('2008-02-28T20:33:01.519+0100');
    equal(newdate.toISOString(), '2008-02-28T20:33:01.519+0100', 'ISO8601 date setting is idemptotent (2008-02-28T20:33:01.519+0100)');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1204227181519), "2008-02-29T20:33:01.519+0100 (" + String(newdate) + ")");

    newdate = new Tempus('1970-01-01T00:00:00.000Z');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(0), "1970-01-01T00:00:00.000Z (" + String(newdate) + ")");

    newdate = new Tempus('2012-12-21T06:06:06.666+0800');
    equal(newdate.toISOString(), '2012-12-21T06:06:06.666+0800', 'ISO8601 date setting is idemptotent (2012-12-21T06:06:06.666+0800)');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1356041166666), "2012-12-21T06:06:06.666+0800 (" + String(newdate) + ")");

    newdate = new Tempus('2012-12-21T06:06:06.6666+0800');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1356041166666), "2012-12-21T06:06:06.6666+0800 (" + String(newdate) + ")");
    
    newdate = new Tempus('2012-12-21T06:06:06.66666+0800');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1356041166666), "2012-12-21T06:06:06.66666+0800 (" + String(newdate) + ")");
    
    newdate = new Tempus('2012-12-21T06:06:06.666666+0800');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1356041166666), "2012-12-21T06:06:06.666666+0800 (" + String(newdate) + ")");
    
    newdate = new Tempus('2012-12-21T06:06:06.6666666+0800');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1356041166666), "2012-12-21T06:06:06.6666666+0800 (" + String(newdate) + ")");
    
    newdate = new Tempus('2012-12-21T06:06:06.66666666+0800');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1356041166666), "2012-12-21T06:06:06.66666666+0800 (" + String(newdate) + ")");
    
    newdate = new Tempus('2012-12-21T06:06:06.666666666+0800');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1356041166666), "2012-12-21T06:06:06.666666666+0800 (" + String(newdate) + ")");
    
    newdate = new Tempus('2012-12-21T06:06:06.6666666666+0800');
    equal(''+new FakeDate(Number(newdate)), ''+new FakeDate(1356041166666), "2012-12-21T06:06:06.6666666666+0800 (" + String(newdate) + ")");
});
    
QUnit.test('Initialise with new ISO8601 intervals', function () {
    FakeDate.stubTimezone = true;

    equal((new Tempus('P3D')).toISOString(), '1970-01-04T00:00:00.000+0000', "P3D: 1970-01-04T00:00:00.000+0000");
    equal((new Tempus('P2M1D')).toISOString(), '1970-03-02T00:00:00.000+0000', "P2M1D: 1970-03-02T00:00:00.000+0000");
    equal((new Tempus('P1Y2M1D')).toISOString(), '1971-03-02T00:00:00.000+0000', "P1Y2M1D: 1971-03-02T00:00:00.000+0000");
    equal((new Tempus('P3Y4M6D')).toISOString(), '1973-05-07T00:00:00.000+0000', "P3Y4M6D: 1973-05-07T00:00:00.000+0000");
    equal((new Tempus('PT2H30M')).toISOString(), '1970-01-01T02:30:00.000+0000', "PT2H30M: 1970-01-01T02:30:00.000+0000");
    equal((new Tempus('PT30M')).toISOString(), '1970-01-01T00:30:00.000+0000', "P30M: 1970-01-01T00:30:00.000+0000");
    equal((new Tempus('PT2S')).toISOString(), '1970-01-01T00:00:02.000+0000', "P2S: 1970-01-01T00:00:02.000+0000");
    equal((new Tempus('P3Y6M4DT12H30M5S')).toISOString(), '1973-07-05T12:30:05.000+0100', "P3Y6M4DT12H30M5S: 1973-07-05T12:30:05.000+0100");
    equal((new Tempus('-P3D')).toISOString(), '1969-12-29T00:00:00.000+0000', "-P3D: 1969-12-29T00:00:00.000+0000");
    equal((new Tempus('-P1D2M')).toISOString(), '1969-10-31T00:00:00.000+0000', "-P1D2M: 1969-10-31T00:00:00.000+0000");

    // ISO intervals with arguments
    equal((new Tempus('P3D', 2011, 0, 1)).toISOString(), '2011-01-04T00:00:00.000+0000', "P3D [2011, 0, 1]: 2011-01-04T00:00:00.000+0000");
    equal((new Tempus('P3D', 'P1D')).toISOString(), '1970-01-05T00:00:00.000+0000', "P3D [P1D]: 1970-01-05T00:00:00.000+0000");
    equal((new Tempus('P3D', 345600000)).toISOString(), '1970-01-08T00:00:00.000+0000', "P3D [345600000]: 1970-01-08T00:00:00.000+0000");

    FakeDate.stubTimezone = false;
});

QUnit.test('Ensure setting date after initial set can extend existing date', function () {
    var newdate = new Tempus(2011, 1, 5);

    equal(newdate.set('P3D').getDate(), 8, 'Set adds to date');
    equal(newdate.set('P3D').getDate(), 11, 'Set adds to date');
    equal(newdate.set('P1Y').getFullYear(), 2012, 'Set adds to date');
    equal(newdate.set('P2Y').getFullYear(), 2014, 'Set adds to date');

});

QUnit.test('many incorrect parsers invalidates further ones [#11][Safari]', function () {
    FakeDate.stubTimezone = true;

    var newdate = Tempus('05-02-2011', ['%d-%m-%Y', '%Y-%m-%d']);
    equal(''+new Date(+newdate), ''+new Date(2011, 1, 5), String(newdate));
    
    newdate = Tempus('05-02-2011', ['%d-%m-%Y', '%Y-%m-%d']);
    equal(''+new Date(+newdate), ''+new Date(2011, 1, 5), String(newdate));
    
    newdate = Tempus('05-02-2011', ['%d-%m-%Y', '%Y-%m-%d']);
    equal(''+new Date(+newdate), ''+new Date(2011, 1, 5), String(newdate));
    
    newdate = Tempus('05-02-2011', ['%d-%m-%Y', '%Y-%m-%d']);
    equal(''+new Date(+newdate), ''+new Date(2011, 1, 5), String(newdate));

    FakeDate.stubTimezone = false;
});
    
QUnit.test('Initialize date with array of reverse formatters', function () {
    
    var newdate = Tempus('2011-02-05', ['%d-%m-%Y', '%Y-%m-%d']);
    equal(newdate.fullYear(), 2011, String(newdate));
    equal(newdate.month(), 1, String(newdate));
    equal(newdate.date(), 5, String(newdate));

    newdate = Tempus('05-02-2011', ['%d-%m-%Y', '%Y-%m-%d']);
    equal(newdate.fullYear(), 2011, String(newdate));
    equal(newdate.month(), 1, String(newdate));
    equal(newdate.date(), 5, String(newdate));
});

QUnit.test('Bad dates in reverse formatter throws error', function () {
    
    raises(
        function () {
            Tempus('this-aint-gonna-work', '%d-%m-%Y');
        },
        function (e) {
            equal(e.message, "Cannot parse 'this-aint-gonna-work' with '%d-%m-%Y'", 'Error');
            return true;
        },
        'Error thrown'
    );
    
    raises(
        function () {
            Tempus('this-aint-gonna-work', ['%d-%m-%Y', '%Y-%m-%d']);
        },
        function (e) {
            equal(e.message, "Cannot parse 'this-aint-gonna-work' with '%d-%m-%Y,%Y-%m-%d'", 'Error');
            return true;
        },
        'Error thrown'
    );
});