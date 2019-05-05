import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, List, ListItem, Text,
} from 'native-base';
import { errorMessages } from '../../../constants/messages';
import Error from '../UI/Error';
import Spacer from '../UI/Spacer';

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

  return (
    <Container>
      <Content padder>
        <Image
          style={{ height: 100, width: null, flex: 1 }}
          source={{ uri: recipe.image || imagePlaceholder }}
        />

        <Spacer size={25} />

        <Card>
          <CardItem header bordered>
            <Text>About this recipe</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{recipe.body}</Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>Ingredients</Text>
          </CardItem>
          <CardItem>
            <Content>
              {/* <List>{ingredients}</List> */}
            </Content>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>Method</Text>
          </CardItem>
          <CardItem>
            {/* <List>{method}</List> */}
          </CardItem>
        </Card>

        <Spacer size={20} />
      </Content>
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
