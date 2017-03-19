import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    card: {
        marginBottom: '10px'
    }
};

const tilesData = {
    immobilisations: {
        bases: [
            {
                img: 'images/movements/Ikkyo.png',
                title: 'Ikkyo'
            }, {
                img: 'images/movements/Nikyo.png',
                title: 'Nikyo'
            }, {
                img: 'images/movements/Sankyo.png',
                title: 'Sankyo'
            }, {
                img: 'images/movements/Yonkyo.png',
                title: 'Yonkyo'
            }, {
                img: 'images/movements/Gokyo.png',
                title: 'Gokyo'
            }
        ],
        variantes: [
            {
                img: 'images/movements/Ude_garami.png',
                title: 'Ude garami'
            }, {
                img: 'images/movements/Hiji_kime_osae.png',
                title: 'Hiji kime osae'
            }
        ]
    },
    projections: {
        bases: [
          {
              img: 'images/movements/Irimi_nage.png',
              title: 'Irimi nage'
          },
          {
              img: 'images/movements/Shihoo_nage.png',
              title: 'Shihoo nage'
          },
          {
              img: 'images/movements/Kote_gaeshi.png',
              title: 'Kote gaeshi'
          },
          {
              img: 'images/movements/Kaiten_nage.png',
              title: 'Kaiten nage'
          },
          {
              img: 'images/movements/Tenchi_nage.png',
              title: 'Tenchi nage'
          },
          {
              img: 'images/movements/Kokyu_hoo.png',
              title: 'Kokyu hoo'
          }
        ]
    }
};

class Movements extends Component {

    constructor() {
        super();
    }

    renderGrid(category, subCategory) {
        let grid;

        if (!this.props.list) {
            grid = <Grid fluid>
                <Row>
                    {tilesData[category][subCategory].map((tile) => (
                        <Col key={tile.img} xs={6} md={3} lg={2}>
                            <Card style={styles.card}>
                                <CardMedia>
                                    <img src={tile.img}/>
                                </CardMedia>
                                <CardActions>
                                    <FlatButton label={tile.title} labelPosition="after" primary={true}/>
                                </CardActions>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Grid>
        } else {
            grid = <List>
                {tilesData[category][subCategory].map((tile) => (
                    <ListItem key={tile.img} primaryText={tile.title} insetChildren={true} leftAvatar={< Avatar src = {
                        tile.img
                    } />}/>
                ))}
            </List>
        }

        return grid
    }

    render() {
        return (
            <div>
                <h2>Immobilisations</h2>
                <h3>Base (Osae waza)</h3>
                {this.renderGrid('immobilisations', 'bases')}
                <h2>Variantes</h2>
                {this.renderGrid('immobilisations', 'variantes')}
                <h2>Projections</h2>
                <h3>Base (Nage waza)</h3>
                {this.renderGrid('projections', 'bases')}
                <h3>Variantes</h3>
            </div>
        )
    }
}

export default Movements
