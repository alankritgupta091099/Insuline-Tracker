import React, { Component } from 'react'
import {ListGroup,Modal,ModalHeader,ModalBody} from 'reactstrap';
import axios from 'axios';

export class result extends Component {
    constructor(props) {
        super(props)
        this.state={
            glucoseCurr:[],
            modal:this.props.togVal,
            name:""
        }
        this.toggle=this.toggle.bind(this);
    }
    componentDidMount(){
    
        axios.get('http://localhost:3003/result')
        .then(res=>{
            const arr=res.data;
            this.setState({
                glucoseCurr:arr[arr.length-1].glucoseCurr,
                insulineReqd:arr[arr.length-1].insulineReqd,
                sugarReqd:arr[arr.length-1].sugarReqd,
                glucoseDoc:arr[arr.length-1].glucoseDoc,
                weight:arr[arr.length-1].weight
            })
            console.log(this.state)
        })
        .catch(err=>console.log(err));
    }    
    toggle=()=>{
        this.setState({
            modal:!this.state.modal
        })
    }
    
    render() {
        const {glucoseCurr,insulineReqd,sugarReqd,glucoseDoc,weight}=this.state;

        if(sugarReqd=="")
        {
            return (
                <div>
                <Modal
                    isOpen={this.state.modal} 
                    toggle={this.toggle} 
                >
                    <ModalHeader toggle={this.toggle}>
                        Result Values
                    </ModalHeader>
                    <ModalBody>
                        <ListGroup>
                                <p>Glucose Requirement:{glucoseDoc} mg/dL</p>
                                <p>Current Glucose Level:{glucoseCurr}  mg/dL</p>
                                <p>Insuline Required:{insulineReqd} units</p>
                        </ListGroup>
                        
                    </ModalBody>
                </Modal>
            </div>
            )
        }
        else{
            return(
                <div>
                <Modal
                    isOpen={this.state.modal} 
                    toggle={this.toggle} 
                >
                    <ModalHeader toggle={this.toggle}>
                        Result Values
                    </ModalHeader>
                    <ModalBody>
                        <ListGroup>
                                <p>Glucose Requirement:{glucoseDoc} mg/dL</p>
                                <p>Current Glucose Level:{glucoseCurr}mg/dL</p>
                                <p>As per you current weight:{weight} kg</p>
                                <p>Sugar Required:{sugarReqd} gm</p>
                        </ListGroup>
                        
                    </ModalBody>
                </Modal>
            </div>
            )
        }
        
    }
}

export default result
