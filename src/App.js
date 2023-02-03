// Repository:  nugatory-react
// Author:      Jeff Grissom
// Version:     1.xx
import { Container } from '@mui/material';
import React, { Component } from 'react';
import './App.css';
import Countries from './components/Countries';


class App extends Component {
  state = {
    index: 0,
    countries: [{ "name": "Afghanistan" }, { "name": "Albania" }, { "name": "Algeria" }, { "name": "Andorra" }, { "name": "Angola" }, { "name": "Antigua and Barbuda" }, { "name": "Argentina" }, { "name": "Armenia" }, { "name": "Australia" }, { "name": "Austria" }, { "name": "Azerbaijan" }, { "name": "Bahamas" }, { "name": "Bahrain" }, { "name": "Bangladesh" }, { "name": "Barbados" }, { "name": "Belarus" }, { "name": "Belgium" }, { "name": "Belize" }, { "name": "Benin" }, { "name": "Bhutan" }, { "name": "Bolivia" }, { "name": "Bosnia and Herzegovina" }, { "name": "Botswana" }, { "name": "Brazil" }, { "name": "Brunei" }, { "name": "Bulgaria" }, { "name": "Burkina Faso" }, { "name": "Burundi" }, { "name": "Côte d\'Ivoire" }, { "name": "Cabo Verde" }, { "name": "Cambodia" }, { "name": "Cameroon" }, { "name": "Canada" }, { "name": "Central African Republic" }, { "name": "Chad" }, { "name": "Chile" }, { "name": "China" }, { "name": "Colombia" }, { "name": "Comoros" }, { "name": "Congo (Congo-Brazzaville)" }, { "name": "Costa Rica" }, { "name": "Croatia" }, { "name": "Cuba" }, { "name": "Cyprus" }, { "name": "Czechia (Czech Republic)" }, { "name": "Democratic Republic of the Congo" }, { "name": "Denmark" }, { "name": "Djibouti" }, { "name": "Dominica" }, { "name": "Dominican Republic" }, { "name": "Ecuador" }, { "name": "Egypt" }, { "name": "El Salvador" }, { "name": "Equatorial Guinea" }, { "name": "Eritrea" }, { "name": "Estonia" }, { "name": "Ethiopia" }, { "name": "Fiji" }, { "name": "Finland" }, { "name": "France" }, { "name": "Gabon" }, { "name": "Gambia" }, { "name": "Georgia" }, { "name": "Germany" }, { "name": "Ghana" }, { "name": "Greece" }, { "name": "Grenada" }, { "name": "Guatemala" }, { "name": "Guinea" }, { "name": "Guinea-Bissau" }, { "name": "Guyana" }, { "name": "Haiti" }, { "name": "Holy See" }, { "name": "Honduras" }, { "name": "Hungary" }, { "name": "Iceland" }, { "name": "India" }, { "name": "Indonesia" }, { "name": "Iran" }, { "name": "Iraq" }, { "name": "Ireland" }, { "name": "Israel" }, { "name": "Italy" }, { "name": "Jamaica" }, { "name": "Japan" }, { "name": "Jordan" }, { "name": "Kazakhstan" }, { "name": "Kenya" }, { "name": "Kiribati" }, { "name": "Kuwait" }, { "name": "Kyrgyzstan" }, { "name": "Laos" }, { "name": "Latvia" }, { "name": "Lebanon" }, { "name": "Lesotho" }, { "name": "Liberia" }, { "name": "Libya" }, { "name": "Liechtenstein" }, { "name": "Lithuania" }, { "name": "Luxembourg" }, { "name": "Madagascar" }, { "name": "Malawi" }, { "name": "Malaysia" }, { "name": "Maldives" }, { "name": "Mali" }, { "name": "Malta" }, { "name": "Marshall Islands" }, { "name": "Mauritania" }, { "name": "Mauritius" }, { "name": "Mexico" }, { "name": "Micronesia" }, { "name": "Moldova" }, { "name": "Monaco" }, { "name": "Mongolia" }, { "name": "Montenegro" }, { "name": "Morocco" }, { "name": "Mozambique" }, { "name": "Myanmar (formerly Burma)" }, { "name": "Namibia" }, { "name": "Nauru" }, { "name": "Nepal" }, { "name": "Netherlands" }, { "name": "New Zealand" }, { "name": "Nicaragua" }, { "name": "Niger" }, { "name": "Nigeria" }, { "name": "North Korea" }, { "name": "North Macedonia" }, { "name": "Norway" }, { "name": "Oman" }, { "name": "Pakistan" }, { "name": "Palau" }, { "name": "Palestine State" }, { "name": "Panama" }, { "name": "Papua New Guinea" }, { "name": "Paraguay" }, { "name": "Peru" }, { "name": "Philippines" }, { "name": "Poland" }, { "name": "Portugal" }, { "name": "Qatar" }, { "name": "Romania" }, { "name": "Russia" }, { "name": "Rwanda" }, { "name": "Saint Kitts and Nevis" }, { "name": "Saint Lucia" }, { "name": "Saint Vincent and the Grenadines" }, { "name": "Samoa" }, { "name": "San Marino" }, { "name": "Sao Tome and Principe" }, { "name": "Saudi Arabia" }, { "name": "Senegal" }, { "name": "Serbia" }, { "name": "Seychelles" }, { "name": "Sierra Leone" }, { "name": "Singapore" }, { "name": "Slovakia" }, { "name": "Slovenia" }, { "name": "Solomon Islands" }, { "name": "Somalia" }, { "name": "South Africa" }, { "name": "South Korea" }, { "name": "South Sudan" }, { "name": "Spain" }, { "name": "Sri Lanka" }, { "name": "Sudan" }, { "name": "Suriname" }, { "name": "Sweden" }, { "name": "Switzerland" }, { "name": "Syria" }, { "name": "Tajikistan" }, { "name": "Tanzania" }, { "name": "Thailand" }, { "name": "Timor-Leste" }, { "name": "Togo" }, { "name": "Tonga" }, { "name": "Trinidad and Tobago" }, { "name": "Tunisia" }, { "name": "Turkey" }, { "name": "Turkmenistan" }, { "name": "Tuvalu" }, { "name": "Uganda" }, { "name": "Ukraine" }, { "name": "United Arab Emirates" }, { "name": "United Kingdom" }, { "name": "United States of America" }, { "name": "Uruguay" }, { "name": "Uzbekistan" }, { "name": "Vanuatu" }, { "name": "Venezuela" }, { "name": "Vietnam" }, { "name": "Yemen" }, { "name": "Zambia" }, { "name": "Zimbabwe" }]
      .map((country, i) => {
        country.id = i
        country.gold = 0
        country.silver = 0
        country.bronze = 0
        return country
      })
  }
  changeMedal = (index, delta, medal) => {
    this.setState({
      countries: this.state.countries.map(cou => {
        if (cou.id === index) {
          switch (medal) {
            case 0:
              cou.bronze = Math.max(cou.bronze + delta, 0)
              break;
            case 1:
              cou.silver = Math.max(cou.silver + delta, 0)
              break;
            case 2:
              cou.gold = Math.max(cou.gold + delta, 0)
              break
            default:
              break
          }

        }
        return cou
      })
    })
  }
  render() {

    return (
      <div className="App">
        <Container>
          <Countries
            countries={this.state.countries}
            changeMedal={this.changeMedal}
          />
        </Container>

      </div>
    );
  }
}

export default App;
