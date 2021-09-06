import { useSwipeable } from 'react-swipeable';


function Testing() {
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
  });
  return (<div><div {...handlers} id="pakistan"> You can swipe here pakistan</div><div {...handlers} id="india"> You can swipe here india </div></div>);
}

export default Testing;