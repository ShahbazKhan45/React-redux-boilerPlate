import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { setData, facebookLogin } from '../../store/action';


class Home extends Component {
    render() {
        let user = { name: "ShahbazKhan", email: "shah@gmail.com" }
        console.log("Props==>", this.props.Users)
        return (
            <div>
                <h1>Home</h1>
                <button onClick={() => this.props.setData(user)}>Set Data</button> <br /> <br />
                <button onClick={() => this.props.facebookLogin()}>Facebook Login</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    Users: state.users
})
const mapDispatchToProp = (dispatch) => ({
    setData: (data) => dispatch(setData(data)),
    facebookLogin: (data) => dispatch(facebookLogin())

})
export default connect(mapStateToProps, mapDispatchToProp)(Home);
