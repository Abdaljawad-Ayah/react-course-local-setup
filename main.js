var const1 = 'goarabgo';
var formatName = function formatName(user) {
  return user.toUpperCase();
};

var app = React.createElement(
  'div',
  null,
  'Hello World',
  React.createElement('br', null),
  ' ',
  const1 + ':2',
  React.createElement('br', null),
  ' ',
  2 + 1,
  React.createElement('br', null),
  ' ',
  formatName(const1),
  React.createElement(
    'div',
    { id: "id" + "1", className: "class1" },
    '1'
  )
);

ReactDOM.render(app, document.getElementById('root'));