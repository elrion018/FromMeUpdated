import PushNotification from 'react-native-push-notification';

const Scheduling = props => {
  let now = new Date(Date.now());
  let time = props[0];
  if (time[0] === 0) {
    now.setMinutes(now.getMinutes() + time[1]);
  } else if (time[0] === 1) {
    now.setHours(now.getHours() + time[1]);
  } else if (time[0] === 2) {
    now.setDate(now.getDate() + time[1]);
  } else if (time[0] === 3) {
    now.setMonth(now.getMonth() + time[1]);
  }
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
    date: now,
  });
  return time;
};

export default Scheduling;
