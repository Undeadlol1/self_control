import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container, Content, Card, CardItem, Body, Text,
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

  // Build Method listing
  const solutionsList = () => (recipe.solutions || [])
    .map(solution => (
      <Card key={solution.id}>
        <CardItem>
          <Body>
            <Text>{solution.text}</Text>
          </Body>
        </CardItem>
      </Card>
    ));
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
          style={{ height: 200, width: null, flex: 1 }}
          source={{ uri: recipe.image || imagePlaceholder }}
        />

        <Spacer size={25} />

        { solutionsList() }

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
