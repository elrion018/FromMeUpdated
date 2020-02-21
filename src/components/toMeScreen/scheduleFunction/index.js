import PushNotification from 'react-native-push-notification';

const Scheduling = props => {
  console.log(props.time);
  PushNotification.localNotificationSchedule({
    vibrate: true,
    vibration: 300,
    priority: 'hight',
    visibility: 'public',
    importance: 'hight',
    message: '편지가 도착했습니다.',
    playSound: false,
    number: 1,
    actions: '["OK"]',
    date: new Date(Date.now()),
  });
};

export default Scheduling;
