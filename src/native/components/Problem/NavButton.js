import React from 'react';
import {
  TouchableOpacity, StyleSheet, View, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionSheet from 'react-native-custom-actionsheet';
import i18n from '../../../lib/i18n';

const styles = StyleSheet.create({
  rightButton: {
    right: 2,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
/**
 * Navigation button which open action sheet on press.
 */
export default () => (
  <WithActionSheet />
);
/**
 * This is a wrapper which enables "bottom action sheet" functionality.
 * I spend 1,5 hours trying to do it non-wrapper way. Doesn't work.
 * Maybe it is a problem with a module itself.
 * https://github.com/valerybugakov/react-native-custom-actionsheet
 * Also "Unable to symbolicate stack trace: Network request failed"
 * warnings started to occur after introducing this package.
 */
class WithActionSheet extends React.Component {
  showActionSheet = () => this.actionSheet.show()

  getActionSheetRef = (ref) => { this.actionSheet = ref; }

  handlePress = (index) => {
    console.log('index', index);
  }

  render() {
    const title = i18n.t('what_do_you_want');
    // List values.
    const options = [i18n.t('cancel'), i18n.t('edit'), i18n.t('delete')];
    return (
      <TouchableOpacity style={styles.rightButton} onPress={this.showActionSheet}>
        <Text>
          <Icon name="md-more" size={26} color="grey" />
        </Text>
        <ActionSheet
          title={title}
          options={options}
          onPress={this.handlePress}
          ref={this.getActionSheetRef}
          cancelButtonIndex={0}
          destructiveButtonIndex={4}
        />
      </TouchableOpacity>
    );
  }
}
