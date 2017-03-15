import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import Info from 'material-ui/svg-icons/action/info';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        overflowY: 'auto'
    }
};

const tilesData = {
  bases:[
        {
            img: '/images/movements/Ikkyo.png',
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
  variantes:[
    {
        img: '/images/movements/Ude_garami.png',
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
          <div style={styles.root}>
              <GridList cols={3} cellHeight={160} style={styles.gridList}>
                <Subheader><h2>Base (Osae waza)</h2></Subheader>
                  {tilesData.bases.map((tile) => (
                      <GridTile
                          key={tile.img}
                          title={tile.title}
                          actionIcon={ <IconButton><Info color="white"/></IconButton> }>
                          <img src={tile.img} style={styles.img}/>
                      </GridTile>
                  ))}
              </GridList>
              <GridList cols={3} cellHeight={160} style={styles.gridList}>
                <Subheader><h2>Variantes</h2></Subheader>
                  {tilesData.variantes.map((tile) => (
                      <GridTile
                          key={tile.img}
                          title={tile.title}
                          actionIcon={ <IconButton><Info color="white"/></IconButton> }>
                          <img src={tile.img} style={styles.img}/>
                      </GridTile>
                  ))}
              </GridList>
          </div>
      )
  }
}

export default Movements
