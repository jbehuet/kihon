import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';

const styles = {
  card: {
    marginBottom: '10px',
    textAlign: 'center',
  },
  title: {
    color: '#AB232F',
    fontSize: '0.9em',
    margin: '0 -19px',
  },
};


class Movements extends Component {
  renderItem(tile) {
    if (!this.props.list) {
      return (
        <Card key={tile.title} style={styles.card} >
          <CardMedia>
            <img src={tile.img} alt={tile.title} />
          </CardMedia>
          <CardTitle title={tile.title} titleStyle={styles.title} />
        </Card>
      );
    }
    return (
      <ListItem key={tile.title} primaryText={tile.title} insetChildren leftAvatar={<Avatar src={tile.img} />} />
    );
  }

  renderGrid(category, subCategory) {
    const { movements } = this.props.movements;
    let grid;
    if (!this.props.list) {
      grid = (
        <Grid fluid>
          <Row>
            {movements[category][subCategory].map(tile => (
              <Col key={tile.title} xs={6} md={3} lg={2}>
                {this.props.isTechniques ?
                  <Link to={`/${category}/${subCategory}/${tile.id}`}>
                    {this.renderItem(tile)}
                  </Link>
                  :
                  this.renderItem(tile)
                }
              </Col>
            ))}
          </Row>
        </Grid>);
    } else {
      grid = (
        <List>
          {movements[category][subCategory].map((tile) => {
            if (this.props.isTechniques) {
              return (
                <Link key={tile.title} to={`/${category}/${subCategory}/${tile.id}`}>
                  {this.renderItem(tile)}
                </Link>
              );
            }
            return this.renderItem(tile);
          })
          }
        </List>);
    }

    return grid;
  }

  renderTechniques() {
    const styleRoot = { textAlign: this.props.list ? '' : 'center', paddingLeft: this.props.list ? '10px' : '0' };
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
    );
  }

  renderAttacks() {
    const styleRoot = { textAlign: this.props.list ? '' : 'center', paddingLeft: this.props.list ? '10px' : '0' };
    return (
      <div style={styleRoot}>
        <h2>Saisies</h2>
        {this.renderGrid('saisies', 'faces')}
        <h3>Arrieres</h3>
        {this.renderGrid('saisies', 'arrieres')}
        <h2>Frappes</h2>
        {this.renderGrid('frappes', 'bases')}
      </div>
    );
  }

  render() {
    if (this.props.isTechniques) {
      return this.renderTechniques();
    }
    return this.renderAttacks();
  }
}

Movements.propTypes = {
  movements: PropTypes.object.isRequired,
  list: PropTypes.bool.isRequired,
  isTechniques: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  movements: state.movements,
});

export default connect(mapStateToProps)(Movements);
