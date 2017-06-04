import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {connect} from 'react-redux';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  card: {
    marginBottom: '10px',
    textAlign: 'center'
  },
  title: {
    color: '#AB232F',
    fontSize: '0.9em',
    margin: '0 -19px'
  }
};

@connect((store) => {
  return {techniques: store.techniques}
})
class Techniques extends Component {

  constructor() {
    super();
  }

  renderGrid(category, subCategory) {
    let grid;

    if (!this.props.list) {
      grid = <Grid fluid>
        <Row>
          {this.props.techniques[category][subCategory].map((tile) => (
            <Col key={tile.img} xs={6} md={3} lg={2}>
              <Card style={styles.card}>
                <CardMedia>
                  <img src={tile.img}/>
                </CardMedia>
                <CardTitle title={tile.title} titleStyle={styles.title}/>
              </Card>
            </Col>
          ))}
        </Row>
      </Grid>
    } else {
      grid = <List>
        {this.props.techniques[category][subCategory].map((tile) => (
          <ListItem key={tile.img} primaryText={tile.title} insetChildren={true} leftAvatar={< Avatar src = {
            tile.img
          } />}/>
        ))}
      </List>
    }

    return grid
  }

  renderTechniques() {
    const styleRoot = (this.props.list
      ? {
        textAlign: ''
      }
      : {
        textAlign: 'center'
      });
    return (
      <div style={styleRoot}>
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

  renderAttacks() {
    const styleRoot = (this.props.list ? {
        textAlign: ''
      }
      : {
        textAlign: 'center'
      });
    return (
      <div style={styleRoot}>
        <h2>Saisies</h2>
        {this.renderGrid('saisies', 'faces')}
        <h3>Arrieres</h3>
        {this.renderGrid('saisies', 'arrieres')}
        <h2>Frappes</h2>
        {this.renderGrid('frappes', 'bases')}
      </div>
    )
  }

  render() {
    if (this.props.isTechniques)
      return this.renderTechniques();
    else
      return this.renderAttacks();
    }
  }

export default Techniques
