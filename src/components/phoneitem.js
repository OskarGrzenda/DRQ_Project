import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

export class Phoneitem extends React.Component {


    constructor() {
        super();

        this.DeletePhone = this.DeletePhone.bind(this);
    }

    DeletePhone(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.phone._id);
        //passes up ID and server deletes movie from database
        axios.delete("http://localhost:4000/api/phones/" + this.props.phone._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }


    render() {
        return (
            <div>

                {/* styling for the wishlist page */}
                <Card>
                    <Card.Header class="card bg-primary text-white">{this.props.phone.phonename}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.phone.picture} width="300" height="300"></img>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/update/" + this.props.phone._id} className="btn btn-success">Update</Link>
                    <Button variant="danger" onClick={this.DeletePhone}>DELETE</Button>
                </Card>


            </div>
        );
    }
}