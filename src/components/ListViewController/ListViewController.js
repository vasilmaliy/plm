import React, { useState, useEffect} from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
} from "react-native";
import Book from "../Book/Book";
import data from './BooksList.json'

const ListViewController = () => {

  const [books, setBooks] = useState(data.books)


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {books.map(book => (
            <Book key={book.isbn13} book={book}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListViewController;
