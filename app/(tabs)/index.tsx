import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleButtonPress = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>

      <View style={styles.modeToggleContainer}>
        <Text style={[styles.toggleText, isDarkMode ? styles.darkText : styles.lightText]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      <Text style={[styles.display, isDarkMode ? styles.darkText : styles.lightText]}>{input}</Text>

      <View style={styles.buttonRow}>

        <TouchableOpacity onPress={() => handleButtonPress('1')} style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('2')} style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('3')} style={styles.button}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('+')} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.buttonRow}>

        <TouchableOpacity onPress={() => handleButtonPress('4')} style={styles.button}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('5')} style={styles.button}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('6')} style={styles.button}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('-')} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.buttonRow}>

        <TouchableOpacity onPress={() => handleButtonPress('7')} style={styles.button}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('8')} style={styles.button}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('9')} style={styles.button}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('*')} style={styles.button}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.buttonRow}>

        <TouchableOpacity onPress={() => handleButtonPress('0')} style={styles.button}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClear} style={styles.button}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styles.button}>
          <Text style={styles.buttonText}>DEL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCalculate} style={[styles.button, styles.equalButton]}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        
      </View>

      <Text style={[styles.footer, isDarkMode ? styles.darkText : styles.lightText]}>Calc by Bhairavnath</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lightMode: {
    backgroundColor: '#fff',
  },
  darkMode: {
    backgroundColor: '#333',
  },
  display: {
    fontSize: 48,
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    margin: 5,
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 32,
  },
  equalButton: {
    backgroundColor: 'green',
  },
  modeToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  toggleText: {
    fontSize: 18,
    marginRight: 10,
  },
  footer: {
    marginTop: 20,
    fontSize: 16,
  },
});
