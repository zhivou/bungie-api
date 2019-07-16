import React, { Component } from 'react';
import { Card, Container, Segment, Grid, Dimmer, Loader, Image } from 'semantic-ui-react'
import './Character.scss';
import { getAllEquippedItems } from '../exports/bungie_api_calls.js';
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
				"Connection": "keep-alive",
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
					<Container textAlign="center" centered className="main-character">
						<Grid centered>
							<Card className="card-character">
								<Card.Content>
									<Card.Header>Character Class</Card.Header>
									<Card.Description>
										<div>
											{this.state.allEquippedItems.map(item => (
													<ul key={item.itemHash}>
														<li className="failedText">
															{item.itemHash}
														</li>
													</ul>
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
					<Container textAlign="center" centered className="main-character">
						<Grid centered>
							<Card className="card-character">
								<Card.Content>
									<Card.Header>Character Class</Card.Header>
									<Card.Description>
											<Segment className="loaderWrapper" centered >
												<Dimmer active>
													<Loader size='large'>Loading</Loader>
												</Dimmer>
											</Segment>
									</Card.Description>
								</Card.Content>
							</Card>
						</Grid>
					</Container>
			);
		}
  }
}

export default Character