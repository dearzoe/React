var FormApp = React.createClass({
    getInitialState: function () {
        return {
            inp:"input value",
            sel:"C",
            rad:"C"
        }
    },
    handleRadio: function (e) {
      this.setState({
           rad:e.target.value
       })
    },
    handleSubmit: function (e) {
        e.preventDefault();/*这里必须加 e.preventDefault(); 阻止默认事件*/
        var formData={
          inp:this.refs["goodInput"].value,
          sel:this.refs["goodSelect"].value,
          rad:this.state.rad
        };
        console.log("ok");
        console.log(formData);
        this.refs.some.say();
    },
    focus:function(){
        this.refs.goodInput.focus()
    },/*首先这里执行，不能加 括号（）*/
    render: function () {
        return <form onSubmit={this.handleSubmit}>
                    <input ref="goodInput" type="text" defaultValue={this.state.inp}/><br/>
                    <select ref="goodSelect" name="" id="" defaultValue={this.state.sel}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="H">H</option>
                    </select><br/>
                    <RadioButton ref="some" handleRadio={this.handleRadio}/><br/>
                    <input type="button" onClick={this.focus} value="聚焦"/><br/>
                    <button type="submit">OK</button>
               </form>
    }
});
var RadioButton = React.createClass({
    say: function () {
      alert("大声说出来!")
    },
    render: function () {
        return <span>
                    <input onChange={this.props.handleRadio} name="haha" type="radio" value="A"/>
                    <input onChange={this.props.handleRadio} name="haha" type="radio" defaultChecked value="B"/>
                    <input onChange={this.props.handleRadio} name="haha" type="radio" value="C"/><br/>
               </span>
    }
});
var arr=[
  <h1>1</h1>,
  <h1>2</h1>,
  <h1>3</h1>,
  <h1>4</h1>,
  <h1>5</h1>
];
ReactDOM.render(
    <div><FormApp/>{arr}</div>,
    document.getElementById("app")
);