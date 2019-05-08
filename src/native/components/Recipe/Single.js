import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container, Content, Card, CardItem, Body, H3, List, ListItem, Text,
} from 'native-base';
import { errorMessages } from '../../../constants/messages';
import Error from '../UI/Error';
import Spacer from '../UI/Spacer';
import AddProblem from '../UI/AddFab';

const RecipeView = ({
  error, problems, recipeId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Recipe from all recipes
  let recipe = null;
  if (recipeId && problems) {
    recipe = problems.find(item => item.id === recipeId);
  }
  // Recipe not found
  if (!recipe) return <Error content={errorMessages.recipe404} />;

  // Build Ingredients listing
  // const ingredients = recipe.ingredients.map(item => (
  //   <ListItem key={item} rightIcon={{ style: { opacity: 0 } }}>
  //     <Text>{item}</Text>
  //   </ListItem>
  // ));

  // Build Method listing
  // const method = recipe.method.map(item => (
  //   <ListItem key={item} rightIcon={{ style: { opacity: 0 } }}>
  //     <Text>{item}</Text>
  //   </ListItem>
  // ));
  const imagePlaceholder = 'https://via.placeholder.com/640x480';
  // Navigate to a new screen when FAB is pressed.
  const onAddProblemPress = () => Actions.createSolution({
    title: String(recipe.title).toUpperCase(),
    match: { params: { recipeId: String(recipe.id) } },
  });

  return (
    <Container>
      <Content padder>
        <Image
          style={{ height: 100, width: null, flex: 1 }}
          source={{ uri: recipe.image || imagePlaceholder }}
        />

        <Spacer size={25} />

        {
          (recipe.solutions || [])
            .map(solution => (
              <Card key={solution.id}>
                <CardItem header bordered>
                  <Text>{solution.text}</Text>
                </CardItem>
                {/* <CardItem>
                  <Body>
                    <Text>This is a body</Text>
                  </Body>
                </CardItem> */}
              </Card>
            ))
        }

        <Spacer size={20} />
      </Content>
      <AddProblem onPress={() => onAddProblemPress()} />
    </Container>
  );
};

RecipeView.propTypes = {
  error: PropTypes.string,
  recipeId: PropTypes.string.isRequired,
  problems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

RecipeView.defaultProps = {
  error: null,
};

export default RecipeView;
