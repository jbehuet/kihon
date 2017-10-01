import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Card, CardActions, CardMedia, CardTitle, CardHeader, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off'
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router'
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import LazyLoad from 'react-lazyload';

const styles = {
    container: {
        marginTop: '64px',
        padding: '24px'
    },
    card: {
        marginBottom: '10px',
    },
    title: {
        color: '#AB232F',
        fontSize: '0.9em',
        margin: '0 -19px'
    },
    close: {
        position: 'absolute'
    }
};

@connect((store) => {
    return { techniques: store.techniques }
})
class Technique extends Component {

    constructor() {
        super();
    }

    render() {
        const { category, subcategory, id } = this.props.params;
        let technique;
        if (this.props.techniques[category])
            if (this.props.techniques[category][subcategory])
                technique = this.props.techniques[category][subcategory][id];

        if (technique) {
            return (
                <div style={styles.container}>
                    <Row>
                        <Col key={technique.id} xs={12}>
                            <Card style={styles.card}>
                                <Row end="xs">
                                    <Col xs={12} style={styles.close}>
                                        <Link to='/'>
                                            <IconButton><HighlightOff /></IconButton>
                                        </Link>
                                    </Col>
                                </Row>
                                <LazyLoad height={200} offset={100}>
                                    <CardHeader
                                        title={technique.title}
                                        subtitle={`${category}/${subcategory}`}
                                        avatar={technique.img}
                                    />
                                </LazyLoad>
                                <CardText dangerouslySetInnerHTML={{__html: technique.description}}>
                                </CardText>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return (
                <div style={styles.container}>
                    <Row>
                        <Col xsOffset={2} xs={8}>
                            <Card style={styles.card}>
                                <Row end="xs">
                                    <Col xs={12} style={styles.close}>
                                        <Link to='/'>
                                            <IconButton><HighlightOff /></IconButton>
                                        </Link>
                                    </Col>
                                </Row>
                                <CardHeader
                                    title='Technique non trouvée !'
                                    subtitle='(-‿◦)'
                                />
                                <CardText>
                                    <Row>
                                        <Col xs={12}>
                                            <em>"Échouer, c’est avoir l’opportunité de recommencer de manière plus intelligente."</em><br />
                                        </Col>
                                    </Row>
                                    <Row end="xs">
                                        <Col xs={12}>
                                            <strong>- Henry Ford</strong>
                                        </Col>
                                    </Row>
                                </CardText>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }
    }

}

export default Technique