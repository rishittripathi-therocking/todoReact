import React, { Component } from 'react';
import Todo from './TodoComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const TodoPage = () => {
            return(
              <Todo  />
            );
        }

        return (
            <TransitionGroup>
                <CSSTransition  classNames="page" timeout={300}>
                    <Switch>
                        <Route path="/Todo" component={TodoPage} />
                        <Redirect to="/Todo" />
                    </Switch>
                </CSSTransition>
          </TransitionGroup>
        );
    }
}

export default Main;