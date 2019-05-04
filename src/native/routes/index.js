import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import i18n from '../../lib/i18n';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import RecipesContainer from '../../containers/Recipes';
import RecipeListingComponent from '../components/Recipe/Listing';
import RecipeSingleComponent from '../components/Recipe/Single';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/User/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/User/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/User/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/User/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/User/Profile';

import AboutComponent from '../components/About';

import CreateProblem from '../components/Problem/Create';
import CreateProblemContainer from '../../containers/CreateProblem';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      {/* <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      > */}
      {/* PROBLEMS TAB */}
      <Stack
        key="home"
        title={'Self Control'.toUpperCase()}
        icon={() => <Icon name="home" {...DefaultProps.icons} />}
        {...DefaultProps.navbarProps}
      >
        <Scene key="home" component={RecipeListingComponent} />
        <Scene
            back
            key="createProblem"
            title={i18n.t('create_a_problem').toUpperCase()}
            {...DefaultProps.navbarProps}
            component={CreateProblemContainer}
            Layout={CreateProblem}
          />
      </Stack>
      {/* USER TAB */}
      {/* <Stack
          key="profile"
          title="PROFILE"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
          <Scene
            back
            key="signUp"
            title="SIGN UP"
            {...DefaultProps.navbarProps}
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="login"
            title="LOGIN"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          />
          <Scene
            back
            key="forgotPassword"
            title="FORGOT PASSWORD"
            {...DefaultProps.navbarProps}
            component={ForgotPasswordContainer}
            Layout={ForgotPasswordComponent}
          />
          <Scene
            back
            key="updateProfile"
            title="UPDATE PROFILE"
            {...DefaultProps.navbarProps}
            component={UpdateProfileContainer}
            Layout={UpdateProfileComponent}
          />
        </Stack> */}
      {/* </Tabs> */}
    </Scene>

    {/* <Scene
      back
      clone
      key="recipe"
      title="RECIPE"
      {...DefaultProps.navbarProps}
      component={RecipesContainer}
      Layout={RecipeSingleComponent}
    /> */}
  </Stack>
);

export default Index;
