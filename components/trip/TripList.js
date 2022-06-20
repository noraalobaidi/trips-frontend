import { SafeAreaView, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import tripsStore from "../../stores/tripsStore";
import TripItem from "./TripItem";
import { observer } from "mobx-react";

function TripList({ navigation }) {
  const tripsList = tripsStore.trips;
  console.log(tripsList);
  function renderTrip({ item: trip }) {
    return (
      <TripItem
        trip={trip}
        onPress={() => {
          navigation.navigate("Detail", {
            itemId: trip._id,
          });
        }}
      />
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        style={styles.tripsList}
        contentContainerStyle={styles.tripsListContainer}
        data={tripsList}
        renderItem={renderTrip}
      />
    </SafeAreaView>
  );
}

export default observer(TripList);

// import React from "react";
// import { FlatList, StyleSheet } from "react-native";

// import productStore from "../stores/productStore.js";
// import { Product } from "./Product.js";

// export function ProductsList({ navigation }) {
//   const products = productStore.getProducts();

//   function renderProduct({ item: product }) {
//     return (
//       <Product
//         product={product}
//         onPress={() => {
//           navigation.navigate("Detail", {
//             itemId: product.id,
//           });
//         }}
//       />
//     );
//   }

//   return (
//     <FlatList
//       style={styles.productsList}
//       contentContainerStyle={styles.productsListContainer}
//       data={products}
//       renderItem={renderProduct}
//     />
//   );
// }

const styles = StyleSheet.create({
  tripsList: {
    backgroundColor: "#eeeeee",
  },
  tripsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
