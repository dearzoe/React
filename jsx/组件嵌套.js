var Message= React.createClass({
    render: function () {
        return <div>
                    <h1>HelloWorld!</h1>
                    <Little/>
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