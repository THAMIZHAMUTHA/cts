SELECT title FROM Events e
WHERE NOT EXISTS (
  SELECT 1 FROM Resources r WHERE r.event_id = e.event_id
);
