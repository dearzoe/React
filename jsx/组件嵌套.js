var Message= React.createClass({
    render: function () {
        var totle=[];
        for(var i=0;i<10;i++){
            totle.push(
                <Little key={"totle"+i}/>
            )
        }
        return <div>
                    <h1>HelloWorld!</h1>
                    {totle}
               </div>
    }
});
var Little=React.createClass({
    render: function () {
        return <h2>
                   有啥可以hello的
               </h2>
    }
})
ReactDOM.render(
  <Message/>,
  document.getElementById("app")
);