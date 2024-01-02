import React from "react";
import "./User.css";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            userInfo:{
                name:"Dummy",
                location:"Dummy",
                avatar_url:"",
            }
        }
        console.log(this.props.name +"constructor");
    }

   async  componentDidMount(){
        console.log(this.props.name +"componentdidmount");
        const data=await fetch("https://api.github.com/users/ritushreedas2002");
        const json= await data.json();
        console.log(json);

        this.setState(
            {
                userInfo:json,
            }
        )
            
        
    }

    render(){
        //const {name,location}=this.props;    ------------destructuring the properties
        console.log(this.props.name +"render");
        const {name,location,avatar_url}=this.state.userInfo;
        return <div className="User-card">

           
            <div>Count:{this.state.count}</div>
            <button onClick={()=>{
                    //Never Manupulate the state variable directly
                    this.setState({
                        count:this.state.count+1,
                    })
            }} >Increase</button>
            <br></br>
            <img src={avatar_url} alt="PIC"></img>
            <div>NAME :{name}</div>
            <div>Location:{location}</div>
            <div>Contact Us:@ritz.das</div>
        </div>
    }
}

export default UserClass;