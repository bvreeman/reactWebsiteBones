import React from 'react';
import './Gallery.css';


// Components
// import About from '../../components/About';
// import Carousel from '../../components/Carousel';
// import Draggable from '../../components/Draggable';
// import withAuthorization from '../../components/FirebaseWithAuthorization'
class Gallery extends React.PureComponent {
    render() {
        return (
            <div>
                <div>
                    {/* <Carousel /> */}
                </div>
                <div className="container">
                    {/* <About /> */}
                    <p>Gallery Page</p>
                </div>
            </div>
        )
    }
}
// const authCondition = (authUser) => !!authUser;
// export default withAuthorization(authCondition)(Home);
export default Gallery