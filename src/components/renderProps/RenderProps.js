import React, {Component} from 'react';
import Mouse from "./Mouse";
import Dino from "./Dino";


class RenderProps extends Component {
    render() {
        return (
            <div>
          <h1>Mouse mover</h1>
                <Mouse render1={mouse=>
                    (<Dino dino={mouse}/>
                    )}/>
            </div>
        );
    }
}

export default RenderProps;