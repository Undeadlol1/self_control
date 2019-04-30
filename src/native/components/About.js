import React from 'react';
import { Actions as router } from 'react-native-router-flux';
import {
  Container, Content, Text, H1, H2, H3, Fab, Icon, View,
} from 'native-base';
import Spacer from './UI/Spacer';
/**
 * Floating Action Button which redirects
 * user to content creation screen.
 */
class Add extends React.Component {
  state = { active: true }

  render() {
    const { active } = this.state;
    return (
      <View>
        <Fab
          active={active}
          direction="up"
          containerStyle={{}}
          position="bottomRight"
          onPress={() => router.jump('profile')}
        >
          <Icon name="add" />
        </Fab>
      </View>
    );
  }
}

const About = () => (
  <Container>
    <Content padder>
      <Spacer size={30} />
      <H1>
        Heading 1
      </H1>
      <Spacer size={10} />
      <Text>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
        malesuada magna mollis euismod. Donec sed odio dui.
        {' '}
      </Text>

      <Spacer size={30} />
      <H2>
        Heading 2
      </H2>
      <Spacer size={10} />
      <Text>
        Elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
        mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
        magna mollis euismod. Donec sed odio dui.
        {' '}
      </Text>

      <Spacer size={30} />
      <H3>
        Heading 3
      </H3>
      <Spacer size={10} />
      <Text>
        Elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
        mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
        magna mollis euismod. Donec sed odio dui.
        {' '}
      </Text>
    </Content>
    <Add />
  </Container>
);

export default About;
