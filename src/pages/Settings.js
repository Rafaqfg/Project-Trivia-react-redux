import React from 'react';
import PropTypes from 'prop-types';

class Settings extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <h1 data-testid="settings-title">Configuração</h1>
        <button
          type="button"
          data-testid="btn-go-home"
          className="btn-result"
          onClick={ () => history.push('/') }
        >
          Home
        </button>
      </div>
    );
  }
}

Settings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Settings;
