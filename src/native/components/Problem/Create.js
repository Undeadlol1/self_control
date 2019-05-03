import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Form, Item, Label, Input, Text, Button, View,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Messages from '../UI/Messages';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';

class Create extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
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
      name: '',
      image: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => this.setState({ [name]: val })

  handleSubmit = () => {
    const { onFormSubmit } = this.props;

    return onFormSubmit(this.state)
      .then(() => setTimeout(() => Actions.pop(), 1000))
      .catch(() => { });
  }

  render() {
    const { loading, error, success } = this.props;
    const { title, image } = this.state;

    return (
      <Container>
        <Content>
          <View padder>
            <Header
              title="Welcome back"
              content="Please use your email and password to login."
            />
            {error && <Messages message={error} />}
            {success && <Messages type="success" message={success} />}
          </View>

          <Form>
            <Item stackedLabel>
              <Label>Название</Label>
              <Input
                value={title}
                disabled={loading}
                onChangeText={v => this.handleChange('title', v)}
              />
            </Item>
            <Item stackedLabel>
              <Label>Изображение (необязательно)</Label>
              <Input
                value={image}
                disabled={loading}
                onChangeText={v => this.handleChange('image', v)}
              />
            </Item>

            <Spacer size={20} />

            <View padder>
              <Button block onPress={this.handleSubmit} disabled={loading}>
                <Text>{loading ? 'Загрузка' : 'Создать'}</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Create;
