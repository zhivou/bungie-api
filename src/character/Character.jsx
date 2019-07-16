import React, { Component } from 'react';
import { Container, Card, Icon, Image, Grid} from 'semantic-ui-react'
import './Character.scss';
import { getAllEquippedItems } from '../exports/bungie_api_calls.js';
const axios = require('axios');



class Character extends Component {
	constructor(props){
		super(props);

		this.state = {
			allEquippedItems: null
		};
	}

	componentDidMount() {


		axios.get(`${getAllEquippedItems()}`, {
			headers: {
				"X-API-Key": tempAPIKey,
				"Connection": "keep-alive",
				"Content-Type": "application/json"
			},
			params: {
				"components": "205"
			}
		})
				.then( res => {
					this.setState({ allEquippedItems: res.data.Response.equipment.data.items} );
				})
				.catch(function (error) {
					console.log(error);
				});
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