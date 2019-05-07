import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Form, Item, Label, Input, Text, Button, View,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Messages from '../UI/Messages';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';
import i18n from '../../../lib/i18n';

class Create extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    problemId: PropTypes.string.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    success: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => this.setState({ [name]: val })

  handleSubmit = () => {
    const { onFormSubmit, problemId } = this.props;
    return onFormSubmit(Object.assign({}, this.state, { problemId }))
      .then(() => setTimeout(() => Actions.pop(), 1000))
      .catch(() => { });
  }

  render() {
    const { loading, error, success } = this.props;
    const { title } = this.state;
    return (
      <Container>
        <Content>
          <View padder>
            {/* <Header
              title="Welcome back"
              content="Please use your email and password to login."
            /> */}
            {error && <Messages message={i18n.t(error)} />}
            {success && <Messages type="success" message={i18n.t(success)} />}
          </View>

          <Form>
            <Item stackedLabel>
              <Label>{i18n.t('title')}</Label>
              <Input
                autoFocus
                value={title}
                disabled={loading}
                onChangeText={v => this.handleChange('title', v)}
              />
            </Item>

            <Spacer size={20} />

            <View padder>
              <Button block onPress={this.handleSubmit} disabled={loading}>
                <Text>{loading ? i18n.t('loading') : i18n.t('create')}</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Create;
