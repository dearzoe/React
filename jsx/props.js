var Message= React.createClass({
    getInitialState: function () {
        return {
            message: ['你好', '世界', '!!!']
        }
    },
    render: function () {
        return <div>
                   <h1>HelloWorld!</h1>
                   <Little messages={this.state.message}/>
               </div>
    }
});
var Little=React.createClass({
    render: function () {
       return <h1>{this.props.messages}</h1>
    }
});/*。*/
ReactDOM.render(
  <Message/>,
  document.getElementById("app")
);