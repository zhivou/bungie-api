import React, { Component } from 'react';
import { Container, Card, Icon, Image, Grid} from 'semantic-ui-react'
import './Character.scss';
import { getAllEquippedItems } from '../exports/bungie_api_calls';

class Character extends Component {
	constructor(props){
		super(props);

		this.state = {
			loading: true,
			allEquippedItems: null
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		this.setState({launches: getAllEquippedItems()});
	}

  render(){
    return (
            <Container textAlign="center" centered className="main-character">
	            <Grid centered>
	    	      	<Card>
				    			<Card.Content>
				      			<Card.Header>Character Class</Card.Header>
				      				<Card.Description>
				        				Matthew is a musician living in Nashville.
				      				</Card.Description>
				    				</Card.Content>
				    			<Card.Content extra>
				      			<a>
											<Icon name='user' />
											22 Friends
				      			</a>
				    			</Card.Content>
				  			</Card>
			  			</Grid>
            </Container>
    )
  }
}

export default Character