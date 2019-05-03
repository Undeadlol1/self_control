import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, TouchableOpacity, RefreshControl, Image,
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import AddProblem from '../Problem/Fab';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import Spacer from '../UI/Spacer';

const temporaryReplacement = [
  {
    id: 1,
    title: 'Поедание сладкого',
    image: 'https://i.ytimg.com/vi/jerUAi3whLM/maxresdefault.jpg',
  },
  // {
  //   id: 2,
  //   title: ''
  // }
];

const RecipeListing = ({
  error,
  loading,
  // recipes,
  reFetch,
  problems
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => String(item.id);

  const onPress = item => Actions.recipe({ match: { params: { id: String(item.id) } } });
  console.log('problems', problems)
  return (
    <Container>
      <Content padder>
        <FlatList
          numColumns={1}
          data={temporaryReplacement}
          renderItem={({ item }) => (
            <Card transparent style={{ paddingHorizontal: 6 }}>
              <CardItem cardBody>
                <TouchableOpacity onPress={() => onPress(item)} style={{ flex: 1 }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      height: 200,
                      width: null,
                      flex: 1,
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              </CardItem>
              <CardItem cardBody>
                <Body>
                  <Spacer size={10} />
                  <Text style={{ fontWeight: '800' }}>
                    {item.title}
                  </Text>
                  <Spacer size={15} />
                </Body>
              </CardItem>
            </Card>
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
      <AddProblem />
    </Container>
  );
};

RecipeListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

RecipeListing.defaultProps = {
  error: null,
  reFetch: null,
};

const mapStateToProps = state => ({
  problems: state.problems.values || [],
});

export default connect(mapStateToProps)(RecipeListing);
