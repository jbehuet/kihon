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
                title: 'Ikkyo',
                min: "5"
            }, {
                img: 'images/movements/Nikyo.png',
                title: 'Nikyo',
                min: "4"
            }, {
                img: 'images/movements/Sankyo.png',
                title: 'Sankyo',
                min: "4"
            }, {
                img: 'images/movements/Yonkyo.png',
                title: 'Yonkyo',
                min: "3"
            }, {
                img: 'images/movements/Gokyo.png',
                title: 'Gokyo',
                min: "2"
            }
        ],
        variantes: [
            {
                img: 'images/movements/Ude_garami.png',
                title: 'Ude garami',
                min: "4"
            }, {
                img: 'images/movements/Hiji_kime_osae.png',
                title: 'Hiji kime osae',
                min: "2"
            }
        ]
    },
    projections: {
        bases: [
          {
              img: 'images/movements/Irimi_nage.png',
              title: 'Irimi nage',
              min: "5"
          },
          {
              img: 'images/movements/Shihoo_nage.png',
              title: 'Shihoo nage',
              min: "5"
          },
          {
              img: 'images/movements/Kote_gaeshi.png',
              title: 'Kote gaeshi',
              min: "4"
          },
          {
              img: 'images/movements/Kaiten_nage.png',
              title: 'Kaiten nage',
              min: "4"
          },
          {
              img: 'images/movements/Tenchi_nage.png',
              title: 'Tenchi nage',
              min: "4"
          },
          {
              img: 'images/movements/Kokyu_hoo.png',
              title: 'Kokyu hoo',
              min: "5"
          }
        ],
        variantes: [
          {
              img: 'images/movements/Sokumen_irimi_nage.png',
              title: 'Sokumen irimi nage',
              min: "4"
          },
          {
              img: 'images/movements/Ude_kime_nage.png',
              title: 'Ude kime nage',
              min: "4"
          },
          {
              img: 'images/movements/Aiki_otoshi.png',
              title: 'Aiki otoshi',
              min: "2"
          },
          {
              img: 'images/movements/Sumi_otoshi.png',
              title: 'Sumi otoshi',
              min: "2"
          },
          {
              img: 'images/movements/Juji_garami.png',
              title: 'Juji garami',
              min: "2"
          },
          {
              img: 'images/movements/Ushiro_kiri_otoshi.png',
              title: 'Ushiro kiri otoshi',
              min: "1"
          },
          {
              img: 'images/movements/Kokyu_nage.png',
              title: 'Kokyu nage',
              min: "4"
          },
          {
              img: 'images/movements/Koshi_nage.png',
              title: 'Koshi nage',
              min: "2"
          },
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
                    {tilesData[category][subCategory]
                      .filter(title => Number(title.min) >= Number(this.props.kyu)).map((tile) => (
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
                {tilesData[category][subCategory]
                  .filter(title => Number(title.min) >= Number(this.props.kyu)).map((tile) => (
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
                {this.renderGrid('projections', 'variantes')}
            </div>
        )
    }
}

export default Movements
