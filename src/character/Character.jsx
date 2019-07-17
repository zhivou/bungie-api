import React, { Component } from 'react';
import { Card, Container, Grid, Loader, Modal } from 'semantic-ui-react'
import './Character.scss';
import { getAllEquippedItems, tempAPIKey } from '../exports/bungie_api_calls.js';
import Manifest from './Manifest'
const axios = require('axios');



class Character extends Component {
	constructor(props){
		super(props);

		this.state = {
			loading: true,
			allEquippedItems: null
		};
	}

	componentDidMount() {
		axios.get(`${getAllEquippedItems()}`, {
			headers: {
				"X-API-Key": tempAPIKey,
				"Content-Type": "application/json"
			},
			params: {
				"components": "205"
			}
		})
				.then( res => {
					this.setState({ allEquippedItems: res.data.Response.equipment.data.items, loading: false } );
				})
				.catch(function (error) {
					console.log(error);
				});
	}

  render(){
		if (!this.state.loading) {
			return (
					<Container textAlign="center" className="main-character">
						<Grid centered>
							<Card className="card-character">
								<Card.Content>
									<Card.Header>Character Class</Card.Header>
									<Card.Description>
										<div>
											{this.state.allEquippedItems.map(item => (
													<div key={item.itemHash}>
															<Manifest id={item.itemHash} />
													</div>
											))
											}
										</div>
									</Card.Description>
								</Card.Content>
							</Card>
						</Grid>
					</Container>
			)
		}
		else {
			return (
							<Modal open>
										<Loader size='massive'>Loading</Loader>
							</Modal>
			);
		}
  }
}

export default Character