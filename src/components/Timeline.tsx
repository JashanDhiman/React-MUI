import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import React from "react";

const MuiTimeline = () => {
  return (
    <div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>9:00 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City A</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>9:20 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City A</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>9:40 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>City A</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default MuiTimeline;
