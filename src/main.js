const const1 = 'goarabgo';
const formatName = function(user){
  return user.toUpperCase();
}

var app = <div>
      Hello World 
      <br /> {const1 + ':2'} 
      <br /> {2+1}
      <br /> {formatName(const1)}
      <div id={"id" + "1"} className={"class1"}>1</div>
    </div>
    
ReactDOM.render(app, document.getElementById('root'));
