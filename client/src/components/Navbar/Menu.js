import React from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: this.state.open ? '120%' : 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        opacity: 0.95,
        background: '#440b0b',
        transition: 'height 0.3s ease',
        zIndex: 2,
      },
      menuList: {
        paddingTop: '2rem',
      }
    }
    return (
      <div style={styles.container}>
        {
          this.state.open ?
            <div style={styles.menuList}>
              {this.props.children}
            </div> : null
        }
      </div>
    )
  }
}
