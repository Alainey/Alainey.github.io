import React, { Component } from 'react';

class Monster extends Component {

render() {
		return (
			<div class="monster_info">
				{this.renderIcon()}
				<div class="monster_data">
					<p><h4><b>{this.props.monster.name}</b></h4>
					<h5>Element: {this.props.monster.element}</h5>
					<h5>Sub-Element: {this.props.monster.sub_element}</h5></p>
				</div>
				<div class="monster_type">
					<p><h4><center>Types</center></h4>
					<h5>{this.props.monster.type1}</h5>
					<h5>{this.props.monster.type2}</h5>
					<h5>{this.props.monster.type3}</h5></p>
				</div>
				<div class="monster_rarity">
					<p><h4><center>Rarity</center></h4>
					<h2><center>{this.props.monster.rarity}</center></h2></p>
				</div>
			</div>
		);           
	}

	renderIcon() {

		switch(this.props.monster.name) {

			case "Reincarnated Haku" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/3491.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "Guardian of the Imperial Capital, Athena" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/3193.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "Hand of the Dark God, Metatron" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/643.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "Sparkling Goddess of Secrets, Kali" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/1747.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "God of the Destroying Lance, Odin" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/2179.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "Thought Spinner Norn, Verdandi" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/2390.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "Judging Scale Steel Star Goddess, Eschamali" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/2592.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "Blazing Goddess of Power, Kali" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/2078.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "Reincarnated Kushinadahime" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/3503.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "God of the Night, Tsukuyomi Dragon" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/2261.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "Awoken Shiva" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/1954.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "Reincarnated Susano no Mikoto" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/3387.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "Judging-Claw Orange Dragonbound, Saria" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/2441.png" alt="monster" />
					</center></div>
				);
				break;
			}

			case "Restrained Dragon Hero, Liu Bei" : {
				return (
					<div id="icon" class="monster_photo"><center>
							<img src="http://puzzledragonx.com/en/img/book/1743.png" alt="monster" />
					</center></div>
				);
				break;
			}

			default : {
				break;
			}
		}
	}

}

export default Monster;