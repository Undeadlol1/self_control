import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRecipes, getMeals } from '../actions/recipes';

class RecipeListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    problems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    fetchRecipes: PropTypes.func.isRequired,
    fetchMeals: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false,
  }

  componentDidMount = () => this.fetchData();

  fetchData = (data) => {
    const { fetchRecipes, fetchMeals } = this.props;

    this.setState({ loading: true });
    return {
      err: null,
      loading: false,
    };
    // return fetchRecipes(data)
    //   .then(() => fetchMeals())
    //   .then(() => this.setState({
    //     loading: false,
    //     error: null,
    //   })).catch(err => this.setState({
    //     loading: false,
    //     error: err,
    //   }));
  }

  render = () => {
    const { Layout, problems, match } = this.props;
    const { loading, error } = this.state;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        recipeId={id}
        error={error}
        loading={loading}
        problems={problems}
        reFetch={() => this.fetchData()}
      />
    );
  }
}

const mapStateToProps = state => ({
  problems: state.problems.values || {},
});

const mapDispatchToProps = {
  fetchMeals: getMeals,
  fetchRecipes: getRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListing);
