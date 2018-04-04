import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import moment from 'moment';

const styles = {
  container: {
    marginTop: '64px',
    backgroundImage: "url('images/bg3.png')",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    height: 'calc(100vh - 64px)',
  },
  select: {
    padding: '0 10px',
  },
  selectField: {
    width: '100%',
  },
  location: {
    position: 'absolute',
    right: '10px',
  },
  progress: {
    textAlign: 'center',
  },
};

const BASE_URL = 'https://ics-to-json.jbehuet.fr/?url=http://www.stages-aikido.fr/public/icalendar';

const formatDate = (traineeship) => {
  moment.locale('fr');

  const start = moment(traineeship.dtstart);
  const end = moment(traineeship.dtend);

  if (end.isSame(start, 'day')) {
    return `Le ${start.format('LL')}`;
  }
  return `Du ${start.format('DD')} au ${end.format('LL')}`;
};

class TraineeshipsContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectedRegion: '',
      traineeships: [],
      loading: false,
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({ selectedRegion: value, traineeships: [], loading: true });
    fetch(`${BASE_URL}/${value}`)
      .then(res => res.json())
      .then(traineeships => this.setState({ traineeships, loading: false }))
      .catch((error) => {
        console.log(error);
        this.setState({ error, loading: false });
      });
  }

  render() {
    const { traineeships, loading, error } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.select}>
          <SelectField
            floatingLabelText="Région"
            value={this.state.selectedRegion}
            onChange={this.handleChange}
            style={styles.selectField}
          >
            <MenuItem value="calendrier-stages-aikido-icalendar-region-alsace.ics" primaryText="Alsace" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-aquitaine.ics" primaryText="Aquitaine" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-auvergne.ics" primaryText="Auvergne" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-basse-normandie.ics" primaryText="Basse Normandie" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-bourgogne.ics" primaryText="Bourgogne" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-bretagne.ics" primaryText="Bretagne" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-centre.ics" primaryText="Centre" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-champagne-ardenne.ics" primaryText="Champagne Ardenne" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-corse.ics" primaryText="Corse" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-dom-tom.ics" primaryText="DOM / TOM" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-franche-comte.ics" primaryText="Franche Comté" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-haute-normandie.ics" primaryText="Haute Normandie" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-ile-de-france.ics" primaryText="Ile de France" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-languedoc-roussillon.ics" primaryText="Languedoc Roussillon" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-limousin.ics" primaryText="Limousin" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-lorraine.ics" primaryText="Lorraine" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-midi-pyrenees.ics" primaryText="Midi Pyrénées" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-nord-pas-de-calais.ics" primaryText="Nord Pas de Calais" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-pays-de-la-loire.ics" primaryText="Pays de la Loire" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-picardie.ics" primaryText="Picardie" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-poitou-charentes.ics" primaryText="Poitou Charentes" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-provence-alpes-cote-d-azur.ics" primaryText="Provence Alpes Côte d'azur" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-~-monaco.ics" primaryText="~Monaco" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-~-suisse.ics" primaryText="~Suisse" />
            <MenuItem value="calendrier-stages-aikido-icalendar-region-~-belgique.ics" primaryText="~Belgique" />
          </SelectField>
        </div>
        {!loading && !error &&
          <div>
            <List>
              {traineeships.map((traineeship, i) => (
                <ListItem
                  key={traineeship.uid}
                  primaryText={
                    <div>{formatDate(traineeship)}
                      <span style={styles.location}>{traineeship.location}</span>
                    </div>}
                  secondaryText={
                    <p>
                      <span>{traineeship.description}</span> -- {traineeship.summary}
                    </p>
                  }
                  secondaryTextLines={2} />
              ))}

            </List>
          </div>
        }
        {loading && !error &&
          <div style={styles.progress}>
            <CircularProgress />
          </div>
        }
        {error &&
          <div style={styles.progress}>
            <p>¯\_(ツ)_/¯ Oupsss, please try again...</p>
          </div>
        }
      </div>
    );
  }
}

export default TraineeshipsContainer;
