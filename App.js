
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from "react-native";

const categories = [
  ["🍔", "مطاعم"],
  ["🛒", "سوبرماركت"],
  ["🥤", "مشروبات"],
  ["🍕", "وجبات سريعة"]
];

const stores = [
  { name: "مطعم الشام", type: "وجبات شرقية", time: "20-30 دقيقة", icon: "🍗" },
  { name: "سوبرماركت المدينة", type: "مواد غذائية", time: "15-25 دقيقة", icon: "🛒" },
  { name: "بيتزا درب", type: "بيتزا ومعجنات", time: "25-35 دقيقة", icon: "🍕" }
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#123D2B" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.logo}>درب <Text style={styles.orange}>●</Text></Text>
        <Text style={styles.location}>📍 منبج، سوريا</Text>
        <Text style={styles.welcome}>أهلاً بك في درب 👋</Text>
        <Text style={styles.subtitle}>كل ما تحتاجه... يصلك حتى بابك</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.search}>
          <Text style={styles.searchText}>🔍 ابحث عن مطعم أو منتج...</Text>
        </View>

        <Text style={styles.section}>ماذا تريد اليوم؟</Text>

        <View style={styles.categories}>
          {categories.map((item, index) => (
            <TouchableOpacity key={index} style={styles.category}>
              <Text style={styles.categoryIcon}>{item[0]}</Text>
              <Text style={styles.categoryText}>{item[1]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>درب يوصل طلبك 🚚</Text>
          <Text style={styles.bannerText}>اطلب بسهولة وتابع طلبك لحظة بلحظة</Text>
        </View>

        <Text style={styles.section}>متاجر قريبة منك</Text>

        {stores.map((store, index) => (
          <TouchableOpacity key={index} style={styles.store}>
            <View style={styles.storeIcon}>
              <Text style={{ fontSize: 34 }}>{store.icon}</Text>
            </View>
            <View style={styles.storeInfo}>
              <Text style={styles.storeName}>{store.name}</Text>
              <Text style={styles.storeType}>{store.type}</Text>
              <Text style={styles.storeTime}>🕒 {store.time}</Text>
            </View>
            <Text style={styles.arrow}>‹</Text>
          </TouchableOpacity>
        ))}

        <View style={{ height: 30 }} />
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerItem}>🏠 الرئيسية</Text>
        <Text style={styles.footerItem}>📦 طلباتي</Text>
        <Text style={styles.footerItem}>👤 حسابي</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7F5" },
  header: {
    backgroundColor: "#123D2B",
    padding: 22,
    paddingTop: 35,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  logo: { color: "white", fontSize: 30, fontWeight: "bold" },
  orange: { color: "#F59E0B" },
  location: { color: "white", marginTop: 12, textAlign: "right" },
  welcome: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 22,
    textAlign: "right"
  },
  subtitle: { color: "#D5E5DA", marginTop: 7, textAlign: "right" },
  search: {
    backgroundColor: "white",
    margin: 18,
    padding: 16,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#E3E8E3"
  },
  searchText: { color: "#888", textAlign: "right" },
  section: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#173C2C",
    marginHorizontal: 18,
    marginTop: 15,
    marginBottom: 14,
    textAlign: "right"
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10
  },
  category: {
    backgroundColor: "white",
    width: "22%",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center"
  },
  categoryIcon: { fontSize: 27 },
  categoryText: { color: "#244735", marginTop: 8, fontSize: 12 },
  banner: {
    backgroundColor: "#F59E0B",
    margin: 18,
    padding: 20,
    borderRadius: 16
  },
  bannerTitle: {
    color: "#173C2C",
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "right"
  },
  bannerText: {
    color: "#173C2C",
    marginTop: 8,
    textAlign: "right"
  },
  store: {
    backgroundColor: "white",
    marginHorizontal: 18,
    marginBottom: 12,
    borderRadius: 15,
    padding: 14,
    flexDirection: "row",
    alignItems: "center"
  },
  storeIcon: {
    backgroundColor: "#EFF5EF",
    width: 62,
    height: 62,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center"
  },
  storeInfo: { flex: 1, marginHorizontal: 13, alignItems: "flex-end" },
  storeName: { fontWeight: "bold", fontSize: 16, color: "#173C2C" },
  storeType: { color: "#777", marginTop: 5 },
  storeTime: { color: "#A66B0A", marginTop: 5, fontSize: 12 },
  arrow: { fontSize: 27, color: "#777" },
  footer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#E7E7E7"
  },
  footerItem: { color: "#173C2C", fontWeight: "bold" }
});
