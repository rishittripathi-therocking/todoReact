import React, { Component } from 'react';
import { Row, Col, Label, Button, Input, Form, ListGroup, ListGroupItem} from 'reactstrap';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: '',
            itemList:[]
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
    
        this.setState({
          item: target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            item: this.state.item,
            id: Date.now()
        };
        this.setState(state => ({
            itemList: state.itemList.concat(newItem),
            item:''
          }));
      
    }
    render() {

        return(
            <React.Fragment>
                <div className="container">
                <h1>Todo List</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Row className="form-group">
                            <Label htmlFor="item" md={3}>Enter Item for Todo</Label>
                            <Col md={7}>
                                <Input name="item" id="item" placeholder="Enter item for to do" value={this.state.item} onChange={this.handleInputChange}></Input>
                                
                            </Col>
                            <Col md={2}>
                            <Button className="btn btn-primary">Todo</Button>
                            </Col>
                        </Row>
                    </Form>
                    <ListGroup id="add">
                         {this.state.itemList.map(itemList => (
                             <React.Fragment>
                                 <Row>
                                    <Col md={12}>
                                        <ListGroupItem key={itemList.id} >{itemList.item}</ListGroupItem>
                                    </Col>
                                </Row>
                            </React.Fragment>
                        ))}
                    </ListGroup>
                </div>
            </React.Fragment>
        );
    }
}
export default Todo;