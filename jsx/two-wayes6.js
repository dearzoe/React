/**
 * Created by Administrator on 2016/11/18.
 */
var Twoway = React.createClass({
   mixins:[React.addons.LinkedStateMixin ],
   getInitialState(){
     return{
         message:"这是双向绑定",
         istrue:"true"
     }
   },
    render(){
        return <span>
                 <h1>{this.state.message}</h1>
                 <h1>这是对的么？{this.state.istrue?"是的":"不是"}</h1>
                 <input type="text" valueLink={this.linkState('message')}/>
                 <input type="checkbox" checkedLink={this.linkState('istrue')}/>
               </span>
    }
});
ReactDOM.render(
    <Twoway/>,
    document.getElementById("app")
)