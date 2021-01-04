import React from 'react';
import { Phones } from './phones';
import { Headphones } from './headphones';
import axios from 'axios';

export class Wishlist extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }
    state = {
        phones: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/phones')
            .then
            (
                (response) => {
                    this.setState({ phones: response.data })
                }
            )
            .catch
            (
                (error) => {
                    console.log(error)
                }
            );


    }

    //method which reloads our data
    ReloadData() {
        axios.get('http://localhost:4000/api/phones')
            .then
            (
                (response) => {
                    this.setState({ phones: response.data })
                }
            )
            .catch
            (
                (error) => {
                    console.log(error)
                }
            );
    }

    render() {
        return (
            <div>
                <h1>My Wishlist</h1>
                <div class="row">
                    {/* displays the information on the wishlist page */}
                    <Phones phones={this.state.phones} ReloadData={this.ReloadData}></Phones>

                </div>
            </div>
        );
    }
}

