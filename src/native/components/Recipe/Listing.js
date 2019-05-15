import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, TouchableOpacity, RefreshControl, Image,
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Left,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import AddProblem from '../UI/AddFab';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import Spacer from '../UI/Spacer';
/**
 * Navigate to a problem screen and change navbar title.
 * @param {Object} problem
 * @property {string} problem.id
 * @property {string} problem.title
 */
function redirect({ title, id }) {
  Actions.recipe({
    title: String(title).toUpperCase(),
    match: { params: { id } },
  });
}
/**
 * Renders list of problems.
 */
const RecipeListing = ({
  error,
  loading,
  reFetch,
  problems,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => String(item.id);

  const imagePlaceholder = 'https://via.placeholder.com/640x480';

  return (
    <Container>
      <Content padder>
        <FlatList
          numColumns={1}
          data={problems}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => redirect(item)} style={{ flex: 1 }}>
              <Card>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{item.title}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={{ uri: item.image || imagePlaceholder }}
                    style={{
                      height: 200,
                      width: null,
                      flex: 1,
                    }}
                  />
                </CardItem>
              </Card>
            </TouchableOpacity>
          )}
          keyExtractor={keyExtractor}
          refreshControl={(
            <RefreshControl
              refreshing={loading}
              onRefresh={reFetch}
            />
          )}
        />

        <Spacer size={20} />
      </Content>
      <AddProblem onPress={() => Actions.jump('createProblem')} />
    </Container>
  );
};

RecipeListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  problems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

RecipeListing.defaultProps = {
  error: null,
  reFetch: null,
  loading: false,
};

const mapStateToProps = state => ({
  problems: state.problems.values || [],
});

export default connect(mapStateToProps)(RecipeListing);
