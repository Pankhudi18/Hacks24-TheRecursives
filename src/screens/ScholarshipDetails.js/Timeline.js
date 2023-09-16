import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimelineItem = ({ date, event }) => (
  <View style={styles.timelineItem}>
    <Text style={styles.timelineDate}>{date}</Text>
    <Text style={styles.timelineEvent}>{event}</Text>
  </View>
);

const Timeline = ({ data }) => (
  <View>
    {data.map((item) => (
      <TimelineItem key={item.id} date={item.date} event={item.event} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  timelineItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  timelineDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  timelineEvent: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Timeline;
