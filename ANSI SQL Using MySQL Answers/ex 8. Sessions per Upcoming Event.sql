SELECT e.title, (
  SELECT COUNT(*) FROM Sessions s WHERE s.event_id = e.event_id
) AS session_count
FROM Events e
WHERE e.status = 'upcoming';
