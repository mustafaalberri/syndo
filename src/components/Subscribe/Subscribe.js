import Subscribe1 from "./Subscribe1";
import Subscribe2 from "./Subscribe2";
import { Component } from "react";

class Subscribe extends Component {
    constructor(props){
        super(props);
        this.state = {
            route: 's1',
        }
    }

    onStepChange = route => this.setState({route: route})

    render() {
        const { onRouteChange, profile, onProfile } = this.props;
        const { route } = this.state;
        return route === 's1'?(
            <Subscribe1 
                onRouteChange={onRouteChange}
                onStepChange={this.onStepChange}
                onProfile={onProfile}
                profile={profile} />
        ):(
            <Subscribe2 
                onRouteChange={onRouteChange}
                onProfile={onProfile}
                profile={profile} />
        )
    }
}

export default Subscribe;