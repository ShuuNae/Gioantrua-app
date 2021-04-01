import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          HomeScreen: {
            screens: {
              HomeScreen: "Home",
            },
          },
          Category: {
            screens: {
              CategoryScreen: "Category",
            },
          },
          OderList: {
            screens: {
              OderListScreen: "OderList",
            },
          },
          Account: {
            screens: {
              AccountScreen: "Account",
            }
          }
        },
      },
      NotFound: "*",
      MainFoodList: {
        screens: {
          MainFoodList: "MainFoodList",
        }
      }
    },
  },
};
