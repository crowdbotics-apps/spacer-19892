import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList95697Navigator from '../features/ArticleList95697/navigator';
import ArticleList95696Navigator from '../features/ArticleList95696/navigator';
import ArticleList95695Navigator from '../features/ArticleList95695/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList95697: { screen: ArticleList95697Navigator },
ArticleList95696: { screen: ArticleList95696Navigator },
ArticleList95695: { screen: ArticleList95695Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
