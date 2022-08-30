import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';

const DatePickerModal = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const time = new Date(`${date}`);

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{date?.toString()}</Text>
      <Text style={styles.dateText}>Date:- {date?.toLocaleDateString()}</Text>
      <Text style={styles.dateText}>
        Time:- {time.getHours()}:{time.getMinutes()}
      </Text>
      <DatePicker
        mode="time"
        modal
        open={open}
        date={date}
        onConfirm={value => {
          setOpen(false);
          setDate(value);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
        <Text style={styles.btnText}>Open Date Picker</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#233f49',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  btnText: {
    fontSize: 18,
    color: '#233f49',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 18,
    color: '#ebebeb',
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default DatePickerModal;
