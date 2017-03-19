import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Info from 'material-ui/svg-icons/action/info';

const styles = {
    card: {
        marginBottom: '10px'
    }
};

const tilesData = {
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
};

class Movements extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>Base (Osae waza)</h2>
                <Grid fluid>
                    <Row>
                        {tilesData.bases.map((tile) => (
                            <Col key={tile.img} xs={6} md={3}>
                                <Card style={styles.card}>
                                    <CardMedia>
                                        <img src={tile.img}/>
                                    </CardMedia>
                                    <CardTitle title={tile.title}/>
                                    <CardActions>
                                        <FlatButton label="Détails" labelPosition="after" primary={true} icon={<Info/>}/>
                                    </CardActions>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Movements
