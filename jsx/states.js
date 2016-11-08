var Message= React.createClass({
    getInitialState: function () {
        return {
            isVisible:true,
            titleMessage:'你好世界！'
        }
    },
    render: function () {
        var styleObj={
            color:this.state.isVisible?'red':'yellow'
        }
        return <div>
                    <button onClick={this.handleClick}>点击我</button>
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
});
var box=ReactDOM.render(
  <Message/>,
  document.getElementById("app"),
    function () {
        console.log("渲染完成")
    }
);
//设置state  (一步)
box.setState({titleMessage:"hahaha"});
//设置state  (两步)
box.state.isVisible = false;
box.forceUpdate();
