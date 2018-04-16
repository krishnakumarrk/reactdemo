import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Note from './Note';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: ''
    }
  }

  addNote() {
    if(this.state.noteText) {
      var noteDate = new Date();
      this.state.noteArray.push({
        'date': noteDate.getFullYear() + "/" + noteDate.getMonth() + "/" + noteDate.getDate(),
        'note': this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: '' });
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({
      noteArray: this.state.noteArray
    });
  }

  handleNoteText(text) {
    this.setState({
      noteText: text
    });
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
              deleteMethod={() => this.deleteNote(key)}/>
    });

    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            This is Todo component!!
          </Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>
        <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Type your notes here!'
                        onChangeText={(text) => this.handleNoteText(text)}
                        value={this.state.noteText}
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});

export default Todo;
