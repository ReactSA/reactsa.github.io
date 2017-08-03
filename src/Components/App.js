
import React, { Component} from 'react';
import TopBanner from './TopBanner';
import MarketingRowLeft from './MarketingRowLeft';
import MarkeingRowRight from './MarketingRowRight';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
            <div className="container">
            <TopBanner/>
            <div className="row marketing">
            <MarketingRowLeft/>
            <MarkeingRowRight/>
            </div>
            </div>
            <Footer/>
            </div>
    );
    }
}
export default App;
