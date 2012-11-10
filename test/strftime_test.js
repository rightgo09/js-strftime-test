TestCase("strftimeTest", {
  setUp: function () {
    this.date = new Date(2012, 9, 2, 9, 9, 9);
  },

  tearDown: function () {
    delete this.date;
  },

  "test %Y should return full year": function () {
    var year = Date.formats.Y(this.date);

    assertNumber(year);
    assertEquals(2012, year);
  },

  "test %m should return month": function () {
    var month = Date.formats.m(this.date);

    assertString(month);
    assertEquals("10", month);
  },

  "test %d should return date": function () {
    var day = Date.formats.d(this.date);

    assertString(day);
    assertEquals("02", day);
  }
});
