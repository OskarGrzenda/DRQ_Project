import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import axios from 'axios';

export class Update extends React.Component {
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


    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/phones/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    phonename: response.data.phonename,
                    picture: response.data.picture
                })
            })
            .catch((error) => {
                console.log(error);
            });

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
        alert("Tech: " + this.state.phonename + " " + this.state.picture)

        const newTech = {
            phonename: this.state.phonename,
            picture: this.state.picture,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/phones/' + this.state._id, newTech)
            .then(res => {
                console.log(res.data)
            })
            .catch();

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
                            style={{ width: '400px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
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
                            style={{ width: '400px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Update'
                            className='btn btn-success'>
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}