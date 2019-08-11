import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody
} from 'reactstrap';
import Result from './result';
import axios from 'axios';

export class enter extends Component {
    constructor(props) {
        super(props)
        this.state={
            glucoseCurr:"",
            modal:false
        }
        this.toggle=this.toggle.bind(this);
    }
    
    
    onChange=(e)=>{
        this.setState({
            glucoseCurr:e.target.value
        })
    }
    onSubmit=e=>{
        e.preventDefault();

        const newItem={
            //id:uuid(),
            glucoseCurr:this.state.glucoseCurr
        }

        axios.post('http://localhost:3003/enter',newItem)
        .then(data=>{console.log(data)})
        .catch(err=>console.log(err));

        // this.setState({
        //     toggle:!this.state.toggle
        // })

        this.toggle();
        console.log(newItem);

       // this.toggle();
    }
    toggle=()=>{
        this.setState({
            modal:!this.state.modal
        })
    }
    render() {
        return (
            <div>
                <Card className="card">
                    <CardBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="glucoseCurr">Enter Current Glucose Value</Label>
                                <Input
                                    type="text"
                                    glucoseCurr="glucoseCurr"
                                    id="glucoseCurr"
                                    placeholder="Add Your Current Glucose Value"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{margin:'1rem 0rem'}}
                                >
                                    Calculate requirements
                                </Button>
                            
                                <Result togVal={true}/>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default enter
