var FormApp = React.createClass({
    getInitialState: function () {
        return {
            inp:"input value",
            sel:"B",
            rad:"B"
        }
    },
    handleChange: function (e) {
      this.setState({
          inp:e.target.value,

      })
    },
    handleSubmit: function (e) {
        e.preventDefault();/*这里必须加 e.preventDefault(); 阻止默认事件*/
        console.log(e);
        console.log("ok");
    },/*首先这里执行，不能加 括号（）*/
    render: function () {
        return <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.inp} onChange={this.handleChange}/><br/>
                    <select name="" id="" value={this.state.sel}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="H">H</option>
                    </select><br/>
                    <input name="haha" type="radio" value="A"/>
                    <input name="haha" type="radio" defaultChecked value="B" />
                    <input name="haha" type="radio" value="C"/><br/>
                    <button type="submit">OK</button>
               </form>
    }
});

ReactDOM.render(
    <FormApp/>,
    document.getElementById("app")
);