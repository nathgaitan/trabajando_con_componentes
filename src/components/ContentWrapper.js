import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import MovieTable from './MovieTable';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />

                        <MovieTable />
                     
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;