(function() {
  var PAGE, QUERY;

  QUERY = {
    name: 'Dashboard Query',
    select: ['company.name', 'name', 'employees.name', 'employees.age'],
    from: 'Department',
    where: [['employees.age', '>', 35]]
  };

  SERVICE = {
    root: "http://" + window.location.hostname + ":8080/intermine-demo/service",
    token: "test-user-token"
  };

  imtables.configure({
    TableCell: {
      IndicateOffHostLinks: false
    }
  });

  imtables.loadDash(
    '#demo',
    {start: 0, size: 10},
    {service: SERVICE, query: QUERY}
  ).then(
    function (table) { console.log('loaded table'); },
    function (error) { console.error(e); }
  );

}).call(this);
