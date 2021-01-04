import React from 'react';

export class Home extends React.Component {
    render() {
        return (
            <div style={{
                backgroundImage: "url(https://images.immediate.co.uk/production/volatile/sites/4/2020/05/Surface-Spring-2020-f0ad949.jpg?quality=90&resize=940,530)",
                height: "600px",
                backgroundSize: "cover"
            }}>

                {/* <h1 style={{
                    color: 'white',
                    backgroundColor: 'black'
                }}>
                    Welcome to MyTech
                </h1> */}

<h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>Welcome</b></span> <span class="w3-hide-small w3-text-light-grey">to MyTech</span></h1>

  
                <h3 style={{ color: 'white', 
                    textShadow: '2px 2px 4px #000000', display: 'block',  marginLeft:'auto', marginRight: 'auto', width: '400px' }}>
                    There is a navigation bar at the top of the page you can use to
                    switch to different pages.
                </h3>

                <h3 style={{ color: 'white',
                    textShadow: '2px 2px 4px #000000', display: 'block',  marginLeft:'auto', marginRight: 'auto', width: '400px'}}>
                    You can create your own wishlist of
                    different tech items that have come out recently.
                </h3>


                <h3 style={{ color: 'white',
                    textShadow: '2px 2px 4px #000000', display: 'block',  marginLeft:'auto', marginRight: 'auto', width: '400px' }}>
                    We have a pre-made headphones page where you can browse
                    and choose what headphones you like.
                </h3>
    



            </div>
        );
    }
}