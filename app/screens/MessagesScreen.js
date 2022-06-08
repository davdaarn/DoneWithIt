import { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'

import AppSafeAreaView from '../components/AppSafeAreaView'
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import colors from '../config/colors'

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/mosh.jpg')
  },
]

const MessagesScreen = (props) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // Delete the message from messages
    setMessages(messages.filter(m => m.id !== message.id));
  }

  return (
    <AppSafeAreaView>
      <GestureHandlerRootView>
        <FlatList
          style={{ height: '100%' }}
          data={messages}
          keyExtractor={m => m.id.toString()}
          renderItem={({ item }) =>
            <ListItem
              image={item.image}
              title={item.title}
              subTitle={item.description}
              onPress={() => { }}
              renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
            />
          }
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => setMessages(initialMessages)}
        />
      </GestureHandlerRootView>
    </AppSafeAreaView>

  )
}

export default MessagesScreen

const styles = StyleSheet.create({})