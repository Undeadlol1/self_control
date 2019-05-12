import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { edit, remove } from '../actions/problems';

class Problem extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    problem: PropTypes.shape({}).isRequired,
  }

  render = () => {
    const {
      Layout, problem, edit, remove,
    } = this.props;

    return (
      <Layout
        problem={problem}
        edit={edit}
        remove={remove}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  problem: (state.problems.values || []).find((i) => {
    const problemId = get(props, 'match.params.id');
    return i.id === problemId;
  }),
});

const mapDispatchToProps = { edit, remove };

export default connect(mapStateToProps, mapDispatchToProps)(Problem);
