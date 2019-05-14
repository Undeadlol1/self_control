import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  TouchableOpacity, StyleSheet, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionSheet from 'react-native-custom-actionsheet';
import get from 'lodash/get';
import i18n from '../../../lib/i18n';
import { remove, edit } from '../../../actions/problems';

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
const NavButton = props => (
  <WithActionSheet {...props} />
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
  static propTypes = {
    edit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }

  showActionSheet = () => this.actionSheet.show()

  getActionSheetRef = (ref) => { this.actionSheet = ref; }

  handlePress = (index) => {
    console.log('index', index);
    const { edit: editProblem, remove: removeProblem } = this.props;
    // problem.id
    const id = get(this, 'props.match.params.id');
    switch (index) {
      case 1:
        return editProblem({ id });
      case 2:
        return removeProblem({ id });
      default:
        break;
    }
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
// const mapStateToProps = (state, ownProps) => ({
//   ...ownProps,
// });
// const mapDispatchToProps = {
//   remove, edit,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(NavButton);

export default NavButton;
