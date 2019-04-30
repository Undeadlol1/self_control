import React from 'react';
import { Actions as router } from 'react-native-router-flux';
import {
  Fab, Icon, View,
} from 'native-base';
/**
 * Floating Action Button which redirects
 * user to content creation screen.
 */
export default class Add extends React.Component {
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
