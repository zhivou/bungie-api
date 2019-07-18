import React, { Component } from 'react';
import { Loader, Modal } from 'semantic-ui-react'
import './Character.scss';
import { getAllEquippedItems, tempAPIKey } from '../exports/bungie_api_calls.js';
import Manifest from './Manifest'
import Background from './pics/inventory_with_char.png'
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
					<div>
						<div key={this.state.allEquippedItems[0].itemHash}>
							<div className="container" id="imgContainer">
								<img src={Background} alt="background" id="background"/>
								<Manifest item_id={this.state.allEquippedItems[11].itemHash} className="classIcon"/>

								<Manifest item_id={this.state.allEquippedItems[0].itemHash} className="leftMain"/>
								<Manifest item_id={this.state.allEquippedItems[1].itemHash} className="leftSecond"/>
								<Manifest item_id={this.state.allEquippedItems[2].itemHash} className="leftPower"/>
								<Manifest item_id={this.state.allEquippedItems[8].itemHash} className="helper"/>

								<Manifest item_id={this.state.allEquippedItems[3].itemHash} className="rightHead"/>
								<Manifest item_id={this.state.allEquippedItems[4].itemHash} className="rightGloves"/>
								<Manifest item_id={this.state.allEquippedItems[5].itemHash} className="rightBody"/>
								<Manifest item_id={this.state.allEquippedItems[6].itemHash} className="rightBoots"/>
								<Manifest item_id={this.state.allEquippedItems[7].itemHash} className="rightCloak"/>
							</div>
						</div>
					</div>
			)
		}
		else {
			return (
							<Modal open>
										<Loader size='massive'>Waiting for Bungie API...</Loader>
							</Modal>
			);
		}
  }
}

export default Character