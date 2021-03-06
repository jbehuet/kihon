import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';
import { Row, Col } from 'react-flexbox-grid';
import CircularProgress from 'material-ui/CircularProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NotificationActive from 'material-ui/svg-icons/social/notifications-active';
import NotificationOff from 'material-ui/svg-icons/social/notifications-off';
import localforage from 'localforage';
import { messaging } from '../../Messaging';

const styles = {
  container: {
    marginTop: '64px',
    height: 'calc(100vh - 64px)',
  },
  select: {
    padding: '0 10px',
  },
  selectField: {
    width: '100%',
  },
  progress: {
    textAlign: 'center',
  },
  notify: {
    zIndex: 9999,
    position: 'fixed',
    right: '10px',
    bottom: '10px',
  },
};

const BASE_URL = 'https://api.stages-aikido.fr';

class TraineeshipsContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectedRegion: '',
      regions: [],
      traineeships: [],
      loading: false,
      error: null,
      token: '',
      subscription: null,
    };
    this.getMessagingToken = this.getMessagingToken.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchRegions = this.fetchRegions.bind(this);
    this.fetchTraineeships = this.fetchTraineeships.bind(this);
    this.subscribePush = this.subscribePush.bind(this);
  }

  componentDidMount() {
    this.getMessagingToken();
    this.fetchRegions();
    localforage.getItem('selectedRegion').then((selectedRegion) => {
      if (selectedRegion) {
        this.fetchTraineeships(selectedRegion);
      }
    });
  }

  getMessagingToken() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      messaging
        .requestPermission()
        .then(async () => {
          const token = await messaging.getToken();
          this.setState({ token });

          fetch(`https://utils.jbehuet.fr/messaging/subscription/kihon/${token}`)
            .then(res => (res.status === 200 ? res.json() : null))
            .then((subscription) => {
              this.setState({ subscription });
            })
            .catch(err => console.log(err));
        })
        .catch((err) => {
          console.log('Unable to get permission to notify.', err);
        });
    }
  }

  handleChange(event, index, value) {
    const { subscription } = this.state;
    this.setState({ selectedRegion: value });
    localforage
      .setItem('selectedRegion', value)
      .then(() => {
        if (!subscription) return;
        fetch(`https://utils.jbehuet.fr/messaging/subscription/${subscription._id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...subscription, data: { region: value } }),
        });
      })
      .then(() => this.fetchTraineeships(value))
      .catch(err => console.log(err));
  }

  fetchRegions() {
    fetch(`${BASE_URL}/regions`)
      .then(res => res.json())
      .then((regions) => {
        this.setState({ regions: Object.keys(regions).map(key => ({ code: key, name: regions[key] })), loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error, loading: false });
      });
  }

  fetchTraineeships(selectedRegion) {
    this.setState({ selectedRegion, traineeships: [], loading: true });
    fetch(`${BASE_URL}/stages?region=${selectedRegion}`)
      .then(res => res.json())
      .then(res => this.setState({ traineeships: res.stages, loading: false }))
      .catch((error) => {
        console.log(error);
        this.setState({ error, loading: false });
      });
  }

  subscribePush() {
    const { subscription, selectedRegion, token } = this.state;

    fetch(`https://utils.jbehuet.fr/messaging/${subscription ? 'unsubscribe' : 'subscribe'}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ application: 'kihon', token, data: { region: selectedRegion } }),
    })
      .then(res => (res.status === 201 ? res.json() : null))
      .then(res => this.setState({ subscription: res }))
      .catch((error) => {
        console.log(error);
        this.setState({ error, loading: false, subscription: null });
      });
  }

  render() {
    const {
      selectedRegion, traineeships, regions, loading, error, subscription, token,
    } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.select}>
          <SelectField floatingLabelText="Région" value={selectedRegion} onChange={this.handleChange} style={styles.selectField}>
            {regions.map(region => (
              <MenuItem key={region.code} value={region.code} primaryText={region.name} />
            ))}
          </SelectField>
        </div>
        {!loading && !error && (
          <div>
            <List>
              {traineeships.map(traineeship => (
                <a key={traineeship.id} href={traineeship.url} target="blank">
                  <ListItem
                    primaryText={
                      <Row>
                        <Col xs={12} md={6}>
                          {traineeship.dateHumaine}
                        </Col>
                        <Col xs={12} md={6} className="text-right-desktop">
                          {traineeship.ville}
                        </Col>
                      </Row>
                    }
                    secondaryText={
                      <p>
                        <span>{traineeship.animateur1}</span>
                        <span>{traineeship.animateur2 && ` -- ${traineeship.animateur2}`}</span>
                        <span>{traineeship.animateur3 && ` -- ${traineeship.animateur3}`}</span>
                        <span>{traineeship.animateur4 && ` -- ${traineeship.animateur4}`}</span>
                        <span>{traineeship.animateur5 && ` -- ${traineeship.animateur5}`}</span>
                      </p>
                    }
                    secondaryTextLines={2}
                  />
                </a>
              ))}
            </List>
          </div>
        )}
        {loading && !error && (
          <div style={styles.progress}>
            <CircularProgress />
          </div>
        )}
        {error && (
          <div style={styles.progress}>
            <p>¯\_(ツ)_/¯ Oupsss, please try again...</p>
          </div>
        )}
        {!!token && selectedRegion && (
          <FloatingActionButton style={styles.notify} backgroundColor={subscription ? '#ccc' : '#ab2330'} onClick={this.subscribePush}>
            {subscription ? <NotificationOff /> : <NotificationActive />}
          </FloatingActionButton>
        )}
      </div>
    );
  }
}

export default TraineeshipsContainer;
