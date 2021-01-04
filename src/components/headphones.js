import React from 'react';
import axios from 'axios';


export class Headphones extends React.Component {


    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);


        this.state =
        {
            headphonename: 'airpods',
            headphonepicture: 'picture'
        }

    }

    onChangeName(e) {
        this.setState
            (
                {
                    headphonename: e.target.value
                }
            );
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Successfully Added to Wishlist!" + this.state.headphonename + this.state.headphonepicture)
        console.log(this.state.headphonename + this.state.headphonepicture)

        const newHeadphones = {
            headphonename: this.state.headphonename,
            headphonepicture: this.state.headphonepicture
        }
        axios.post('http://localhost:3000/wishlist', newHeadphones)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    moreInfo() {
        alert("Airpods Max Price: $500 BatteryLife: 16HRS")
    }
    moreInfo2() {
        alert("Sony WH-1000XM4 Price: $300 BatteryLife: 12HRS")
    }
    moreInfo3() {
        alert("Bowers & Wilkins PX7 Price: $150 BatteryLife: 8HRS")
    }
    moreInfo4() {
        alert("Sony WF-1000XM3 Price: $160 BatteryLife: 4HRS")
    }

    render() {

        return (

            <div>
                <h1>New 2020 Headphones</h1>


                <div class="row">
                    <div class="column">

                        <form onSubmit={this.onSubmit}>
                            <h3>Airpods Max</h3>
                            <img src="https://cdn.alzashop.com/Foto/f3/JA/JA940i6.jpg"
                                width="350" height="400"></img>

                            <div class="column">
                                <input type='submit'
                                    value='Add to WishList'
                                    className='btn btn-success'>
                                </input>
                            </div>
                        </form>

                        <form onSubmit={this.moreInfo}>

                            <input type='submit'
                                value='More Info'
                                className='btn btn-primary'>
                            </input>

                        </form>

                    </div>


                    <div class="column">
                        <h3>Sony WH-1000XM4</h3>
                        <img src="https://www.sony.ie/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
                            width="350" height="400"></img>

                        <div class="column">
                            <form onSubmit={this.onSubmit}>
                                <input type='submit'
                                    value='Add to WishList'
                                    className='btn btn-success'>
                                </input>
                            </form>

                            <form onSubmit={this.moreInfo2}>

                                <input type='submit'
                                    value='More Info'
                                    className='btn btn-primary'>
                                </input>

                            </form>
                        </div>
                    </div>

                    <div class="column">
                        <h3>Bowers & Wilkins PX7</h3>
                        <img src="https://www.pure-platinum.co.za/wp-content/uploads/2020/03/Bowers-Wilkins-PX7-1-scaled.jpg"
                            width="350" height="400"></img>

                        <div class="column">
                            <form onSubmit={this.onSubmit}>
                                <input type='submit'
                                    value='Add to WishList'
                                    className='btn btn-success'>
                                </input>
                            </form>

                            <form onSubmit={this.moreInfo3}>

                                <input type='submit'
                                    value='More Info'
                                    className='btn btn-primary'>
                                </input>

                            </form>
                        </div>
                    </div>

                    <div class="column">
                        <h3>Sony WF-1000XM3</h3>
                        <img src="https://www.sony.ie/image/53d5d860b293bac0afad1a5181e6e02a?fmt=pjpeg&wid=220&bgcolor=FFFFFF&bgc=FFFFFF"
                            width="320" height="400"></img>

                        <div class="column">
                            <form onSubmit={this.onSubmit}>

                                <input type='submit'
                                    value='Add to WishList'
                                    className='btn btn-success'>
                                </input>
                            </form>

                            <form onSubmit={this.moreInfo4}>

                                <input type='submit'
                                    value='More Info'
                                    className='btn btn-primary'>
                                </input>

                            </form>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}