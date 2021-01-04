import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import axios from 'axios';

export class Addnewitem extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);

        this.state =
        {
            phonename: '',
            picture: ''
        }
    }

    onChangeName(e) {
        this.setState
            (
                {
                    phonename: e.target.value
                }
            );
    }


    onChangeImage(e) {
        this.setState
            (
                {
                    picture: e.target.value
                }
            );
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Phone: " + this.state.phonename + " " + this.state.picture)

        const newPhone = {
            phonename: this.state.phonename,
            picture: this.state.picture
        }
        axios.post('http://localhost:4000/api/phones', newPhone)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    render() {
        return (

            <div className='App' style={{
                backgroundImage: "url(https://images.immediate.co.uk/production/volatile/sites/4/2020/05/Surface-Spring-2020-f0ad949.jpg?quality=90&resize=940,530)",
                height: "600px",
                backgroundSize: "cover"
            }} >
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <h1 style={{
                            color: 'white',
                            textShadow: '2px 2px 4px #000000'
                        }}>Add Product Name</h1>
                        <input type='text'
                            className='form-control'
                            value={this.state.phonename}
                            onChange={this.onChangeName}
                            style={{width: '400px', display: 'block',  marginLeft:'auto', marginRight: 'auto'}}>
                        </input>
                    </div>

                    <div className="form-group">
                        <h1 style={{
                            color: 'white',
                            textShadow: '2px 2px 4px #000000'
                        }}>Add Image Of Product</h1>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.picture}
                            onChange={this.onChangeImage}
                            style={{width: '400px', display: 'block',  marginLeft:'auto', marginRight: 'auto'}}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add To Wishlist'
                            className='btn btn-success'>
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}