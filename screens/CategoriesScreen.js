import React from "react";

import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

// this navigation prop is passed by default if the component is registered as screen in <Stack.Screen> tag but not passed to child components
function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      // the value passed in navigate() is the name we gave while registering screen using <Stack.Screen> in app.js
      // we can pass the params to the child component as the second argument to navigate() as object
      navigation.navigate("Meals Overview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
