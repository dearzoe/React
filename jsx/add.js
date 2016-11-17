var Add=React.createClass({
    getInitialState: function () {
        return {
            num:1
        }
    },
    number: function () {
      this.setState({
          num:this.state.num+1,
      })
    },
    render: function () {
        return <span>
                  <div>{this.state.num}</div>
                  <button disabled onClick={this.number}>+</button>
               </span>
    }
});

ReactDOM.render(
    <Add/>,
    document.getElementById("app")
)