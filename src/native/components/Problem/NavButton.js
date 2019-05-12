import React from 'react';
import {
  TouchableOpacity, StyleSheet, View, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionSheet from 'react-native-custom-actionsheet';
/**
 * Navigation button which open action sheet on press.
 */
export default props => (
  <TouchableOpacity onPress={() => null} style={styles.rightButton}>
    <Icon name="md-more" size={26} color="grey" />
    <DefaultExample />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  rightButton: {
    right: 2,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 16,
    paddingRight: 16,
  },
});


const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 4;
const options = ['Cancel', 'Apple', 'Banana', 'Watermelon', 'Durian'];
const title = 'Which one do you like?';

class DefaultExample extends React.Component {
  state = {
    selected: '',
  }

  showActionSheet = () => this.actionSheet.show()

  getActionSheetRef = ref => (this.actionSheet = ref)

  handlePress = index => this.setState({ selected: index })

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={{ marginBottom: 20 }}>
          I like
          {' '}
          {options[this.state.selected]}
        </Text>
        <Text style={styles.button} onPress={this.showActionSheet}>
          Default ActionSheet
        </Text>
        <ActionSheet
          ref={this.getActionSheetRef}
          title={title}
          message="custom message custom message custom message custom message custom message custom message "
          options={options}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
          onPress={this.handlePress}
        />
      </View>
    );
  }
}
