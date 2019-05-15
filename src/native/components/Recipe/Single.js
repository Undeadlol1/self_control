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
  error, problem,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Solution not found
  if (!problem) return <Error content={errorMessages.recipe404} />;

  // Build Method listing
  const solutionsList = () => (problem.solutions || [])
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
    title: String(problem.title).toUpperCase(),
    match: { params: { recipeId: problem.id } },
  });

  return (
    <Container>
      <Content padder>
        <Image
          style={{ height: 200, width: null, flex: 1 }}
          source={{ uri: problem.image || imagePlaceholder }}
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
  problem: PropTypes.shape({}).isRequired,
};

RecipeView.defaultProps = {
  error: null,
};

export default RecipeView;
