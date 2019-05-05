import React from 'react';
import {
  Fab, Icon, View,
} from 'native-base';
/**
 * Basic "Add" floating action button.
 */
export default props => (
  <View>
    <Fab
      direction="up"
      containerStyle={{}}
      position="bottomRight"
      {...props}
    >
      <Icon name="add" />
    </Fab>
  </View>
);
