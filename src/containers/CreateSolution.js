import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateSolution from '../native/components/Solution/Create';
import { addSolution } from '../actions/problems';

class CreateSolutionContainer extends Component {
  static propTypes = {
    // Due to constant problems in router,
    // passing component as "Layout" is disabled.
    // TODO: fix or remove this line.
    // Layout: PropTypes.func.isRequired,
    member: PropTypes.shape({}).isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    // Router match object with params.
    match: PropTypes.shape({}).isRequired,
  }

  state = {
    error: null,
    success: null,
    loading: false,
  }

  onFormSubmit = (data) => {
    const { onFormSubmit } = this.props;

    this.setState({ loading: true });

    return onFormSubmit(data)
      .then(() => this.setState({
        loading: false,
        success: 'success', // i18n trsnslation key
        error: null,
      })).catch((err) => {
        this.setState({
          loading: false,
          success: null,
          error: err,
        });
        throw err; // To prevent transition back
      });
  }

  render = () => {
    const { member, match } = this.props;
    const { error, loading, success } = this.state;
    return (
      <CreateSolution
        error={error}
        member={member}
        loading={loading}
        success={success}
        problemId={match.params.recipeId}
        onFormSubmit={this.onFormSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = {
  onFormSubmit: addSolution,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSolutionContainer);
