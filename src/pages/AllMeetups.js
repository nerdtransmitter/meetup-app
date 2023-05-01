import React, { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMeetups, setLoadingMeetups] = useState([]);

  useEffect(() => {
    fetch(
      'https://meetup-app-d7f69-default-rtdb.firebaseio.com/meetups.json',
    ).then(response => {
      return response.json();
    }).then((data) => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }

        meetups.push(meetup);
      };

      setIsLoading(false);
      setLoadingMeetups(meetups);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>is loading...</p>
      </section>
    )
  }

  return (
    // <Container maxWidth="sm">
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadingMeetups} />
    </div>
    /* </Container> */
  );
}

export default AllMeetUpsPage;
