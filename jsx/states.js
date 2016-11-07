var Message= React.createClass({
    getInitialState: function () {
        return {
            isVisible:true,
            titleMessage:'你好世界！'
        }
    },
    render: function () {
        var styleObj={
            color:this.state.isVisible?'red':yellow,
        }
        return <div>
                    <h1 style={styleObj}>{this.state.titleMessage} </h1>
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